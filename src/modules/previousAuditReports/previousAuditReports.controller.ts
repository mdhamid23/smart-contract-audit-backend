import { QueryParserPipe, ValidationPipe } from "@/common/pipes";
import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { PreviousAuditReportsDto } from "./dto/previous-audit-request.dto";
import { PreviousAuditReportsService } from "./previousAuditReports.service";

@Controller({ path: "/previous-audit-reports" })
export class PreviousAuditReportsController {
  constructor(private previousAuditReportsService: PreviousAuditReportsService) {}

  @Get()
  findAll(
    @Query(new QueryParserPipe("MANY", [])) findOption
  ) {
    return this.previousAuditReportsService.findAll(findOption);
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.previousAuditReportsService.findOneById(+id);
  }

  @Post()
  createOne(@Body(new ValidationPipe()) body: PreviousAuditReportsDto) {
    return this.previousAuditReportsService.createOne(body);
  }
}
