import { QueryParserPipe, ValidationPipe } from "@/common/pipes";
import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { TrackAuditProgressDto } from "./dto/track-audit-progress.dto";
import { TrackAuditProgressService } from "./trackAuditProgress.service";

@Controller({ path: "/track-audit-progress" })
export class TrackAuditProgressController {
  constructor(private trackAuditProgressService: TrackAuditProgressService) {}

  @Get()
  findAll(
    @Query(new QueryParserPipe("MANY", [])) findOption
  ) {
    return this.trackAuditProgressService.findAll(findOption);
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.trackAuditProgressService.findOneById(+id);
  }

  @Post()
  createOne(@Body(new ValidationPipe()) body: TrackAuditProgressDto) {
    return this.trackAuditProgressService.createOne(body);
  }
}
