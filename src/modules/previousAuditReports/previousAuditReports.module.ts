import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PreviousAuditReports } from "./entities/previous-audit-reports.entity";
import { PreviousAuditReportsController } from "./previousAuditReports.controller";
import { PreviousAuditReportsService } from "./previousAuditReports.service";

@Module({
  imports: [TypeOrmModule.forFeature([PreviousAuditReports])],
  controllers: [PreviousAuditReportsController],
  providers: [PreviousAuditReportsService],
  exports: [PreviousAuditReportsService],
})
export class PreviousAuditReportsModule {}
