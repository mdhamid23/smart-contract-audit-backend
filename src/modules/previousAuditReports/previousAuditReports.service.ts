
import { paginateResponse } from "@/common/helpers/paginateResponse";
import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { PreviousAuditReportsDto } from "./dto/previous-audit-request.dto";
import { PreviousAuditReports } from "./entities/previous-audit-reports.entity";

@Injectable()
export class PreviousAuditReportsService{
  constructor(
    @InjectRepository(PreviousAuditReports)
    private previousAuditReportsRepository: Repository<PreviousAuditReports>
  ) {}

  async findAll(findOption) {
    try {
      const data = await this.previousAuditReportsRepository.findAndCount(findOption);
      return paginateResponse(data);
    } catch (err) {
        console.log(err)
      throw new BadRequestException();
    }
  }

  async findOne(findOption): Promise<PreviousAuditReports | any> {
    try {
      return await this.previousAuditReportsRepository.findOne(findOption);
    } catch (err) {
      throw new BadRequestException();
    }
  }

  async findOneById(id: number) {
    try {
      const data = await this.previousAuditReportsRepository.findOne({
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

  async createOne(dto: PreviousAuditReportsDto) {
    console.log(dto)
    const audit = await this.previousAuditReportsRepository.create(dto);
    return await this.previousAuditReportsRepository.save(audit);
  }

  //   async updateOne(dto: User) {
  //     await this.previousAuditReportsRepository.update({ id: dto.id }, dto);
  //     return this.findOneById(dto.id);
  //   }
}
