import { AuditRequestModule } from "@/modules/auditRequest/auditRequest.module";
import { WhiteListedModule } from "@/modules/white_listed_address/white_listed_address.module";
import { PostgresDatabaseProviderModule } from "@/providers/database/postgres/provider.module";
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    WhiteListedModule,
    AuditRequestModule,
    PostgresDatabaseProviderModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    // BullModule.forRoot({
    //   redis: {
    //     host: process.env.REDIS_HOST || "localhost",
    //     port: +(process.env.REDIS_PORT || 6379),
    //     password: process.env.REDIS_PASSWORD,
    //   },
    // }),
    // CacheModule.register({
    //   store: redisStore.create({
    //     host: process.env.REDIS_HOST || "localhost",
    //     port: +(process.env.REDIS_PORT || 6379),
    //     password: process.env.REDIS_PASSWORD,
    //   }),
    //   isGlobal: true,
    //   ttl: 10,
    // }),
    // ScheduleModule.forRoot(),
    // CacheManagerModule,
    // JobModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
