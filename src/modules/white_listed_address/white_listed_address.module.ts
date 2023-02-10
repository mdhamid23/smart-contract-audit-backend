import { WhiteListedAddress } from "@/modules/white_listed_address/entities/whiteListed.entity";
import { WhiteListedController } from "@/modules/white_listed_address/white_listed_address.controller";
import { WhiteListedService } from "@/modules/white_listed_address/white_listed_address.service";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([WhiteListedAddress])],
  controllers: [WhiteListedController],
  providers: [WhiteListedService],
  exports: [WhiteListedService],
})
export class WhiteListedModule {}
