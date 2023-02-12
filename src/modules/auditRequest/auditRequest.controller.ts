import { QueryParserPipe, ValidationPipe } from "@/common/pipes";
import { AuditRequestService } from "@/modules/auditRequest/auditRequest.service";
import { AuditRequest } from "@/modules/auditRequest/entities/audit-request.entity";
import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";

@Controller({ path: "/audit-requests" })
export class AuditRequestController {
  constructor(private auditRequestService: AuditRequestService) {}

  @Get()
  findAll(
    @Query(new QueryParserPipe("MANY", [])) findOption
  ): Promise<AuditRequest[]> {
    return this.auditRequestService.findAll(findOption);
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.auditRequestService.findOneById(+id);
  }

  @Post()
  createOne(@Body(new ValidationPipe()) body: AuditRequest) {
    return this.auditRequestService.createOne(body);
  }
}
