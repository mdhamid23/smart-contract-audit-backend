import { AuditRequestController } from "@/modules/auditRequest/auditRequest.controller";
import { AuditRequestService } from "@/modules/auditRequest/auditRequest.service";
import { AuditRequest } from "@/modules/auditRequest/entities/audit-request.entity";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([AuditRequest])],
  controllers: [AuditRequestController],
  providers: [AuditRequestService],
  exports: [AuditRequestService],
})
export class AuditRequestModule {}
