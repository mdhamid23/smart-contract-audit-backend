import { AuditRequestDto } from "@/modules/auditRequest/dto/audit-request.dto";
import { AuditRequest } from "@/modules/auditRequest/entities/audit-request.entity";
import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class AuditRequestService {
  constructor(
    @InjectRepository(AuditRequest)
    private auditRequestRepository: Repository<AuditRequest>
  ) {}

  async findAll(findOption) {
    try {
      return await this.auditRequestRepository.find(findOption);
    } catch (err) {
      throw new BadRequestException();
    }
  }

  async findOne(findOption): Promise<AuditRequest | any> {
    try {
      return await this.auditRequestRepository.findOne(findOption);
    } catch (err) {
      throw new BadRequestException();
    }
  }

  async findOneById(id: number) {
    try {
      const data = await this.auditRequestRepository.findOne({
        where: {
          id: id,
        },
      });
      return data;
    } catch (error) {
      console.log(error);
      throw new BadRequestException();
    }
  }

  async createOne(dto: AuditRequestDto) {
    dto.expected_date = new Date();
    dto.loc=100;
    console.log(dto)
    const audit = await this.auditRequestRepository.create(dto);
    return await this.auditRequestRepository.save(audit);
  }

  //   async updateOne(dto: User) {
  //     await this.auditRequestRepository.update({ id: dto.id }, dto);
  //     return this.findOneById(dto.id);
  //   }
}
