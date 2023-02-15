
import { paginateResponse } from "@/common/helpers/paginateResponse";
import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { TrackAuditProgressDto } from "./dto/track-audit-progress.dto";
import { TrackAuditProgress } from "./entities/track-audit-progress.entity";

@Injectable()
export class TrackAuditProgressService{
  constructor(
    @InjectRepository(TrackAuditProgress)
    private trackAuditProgressRepository: Repository<TrackAuditProgress>
  ) {}

  async findAll(findOption) {
    try {
      const data = await this.trackAuditProgressRepository.findAndCount(findOption);
      return paginateResponse(data);
    } catch (err) {
        console.log(err)
      throw new BadRequestException();
    }
  }

  async findOne(findOption): Promise<TrackAuditProgress | any> {
    try {
      return await this.trackAuditProgressRepository.findOne(findOption);
    } catch (err) {
      throw new BadRequestException();
    }
  }

  async findOneById(id: number) {
    try {
      const data = await this.trackAuditProgressRepository.findOne({
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

  async createOne(dto: TrackAuditProgressDto) {
    console.log(dto)
    const audit = await this.trackAuditProgressRepository.create(dto);
    return await this.trackAuditProgressRepository.save(audit);
  }

  //   async updateOne(dto: User) {
  //     await this.trackAuditProgressRepository.update({ id: dto.id }, dto);
  //     return this.findOneById(dto.id);
  //   }
}
