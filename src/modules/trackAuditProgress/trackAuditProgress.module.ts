import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TrackAuditProgress } from "./entities/track-audit-progress.entity";
import { TrackAuditProgressController } from "./trackAuditProgress.controller";
import { TrackAuditProgressService } from "./trackAuditProgress.service";

@Module({
  imports: [TypeOrmModule.forFeature([TrackAuditProgress])],
  controllers: [TrackAuditProgressController],
  providers: [TrackAuditProgressService],
  exports: [TrackAuditProgressService],
})
export class TrackAuditProgressModule {}
