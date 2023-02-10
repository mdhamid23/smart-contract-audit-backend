import { CreateWhiteListedDto } from "@/modules/white_listed_address/dto/create-white-listed-address.dto";
import { WhiteListedAddress } from "@/modules/white_listed_address/entities/whiteListed.entity";
import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { isAddress } from "ethers/lib/utils";
import { Repository } from "typeorm";

@Injectable()
export class WhiteListedService {
  constructor(
    @InjectRepository(WhiteListedAddress)
    private whiteListedAddressRepository: Repository<WhiteListedAddress>
  ) {}

  async findAll(findOption) {
    const data = await this.whiteListedAddressRepository.find(findOption);
    return { data };
  }

  async findOne(findOption) {
    return await this.whiteListedAddressRepository.findOne(findOption);
  }
  async findOneByAddress(address: string) {
    return await this.whiteListedAddressRepository.findOne({
      where: {
        white_listed_address: address,
      },
    });
  }

  async createOne(dto: CreateWhiteListedDto) {
    const getCreator = await this.whiteListedAddressRepository.findOne({
      where: {
        white_listed_address: dto.creator,
      },
    });
    if (!getCreator)
      throw new BadRequestException("You must be an admin to add addresses");
    if (getCreator?.role?.toLowerCase() !== "admin" || !getCreator?.is_active)
      throw new BadRequestException("You must be an admin to add addresses");

    if (!isAddress(dto.white_listed_address))
      throw new BadRequestException("Invalid wallet address!!");

    const savedOne = await this.whiteListedAddressRepository.save(
      this.whiteListedAddressRepository.create({
        white_listed_address: dto.white_listed_address,
        is_active: dto.is_active ? true : false,
        role: dto.role,
      })
    );
    return savedOne;
  }
}
