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
    console.log(dto)
    const audit = await this.auditRequestRepository.create({
      project_name:dto.project_name,
      contract_type:dto.contract_type,
      blockchain_frame:dto.blockchain_frame,
      number_of_smart_contract:dto.number_of_smart_contract,
      project_link:dto.project_link,
      has_document:dto.has_document.toString()==="yes"?true:false,
      platform:dto.platform,
      platform_id:dto.platform_id,
      expected_date:dto.expected_date,
      loc:dto.loc,
      additional_info:dto.additional_info,
      complexity:dto.complexity,
      is_published:dto.is_published.toString()==="yes"?true:false,
      
    });
    return await this.auditRequestRepository.save(audit);
  }

  //   async updateOne(dto: User) {
  //     await this.auditRequestRepository.update({ id: dto.id }, dto);
  //     return this.findOneById(dto.id);
  //   }
}
