import { Module } from "@nestjs/common";
import { SAModuleBase } from "./base/sa.module.base";
import { SAService } from "./sa.service";
import { SAController } from "./sa.controller";
import { SAResolver } from "./sa.resolver";

@Module({
  imports: [SAModuleBase],
  controllers: [SAController],
  providers: [SAService, SAResolver],
  exports: [SAService],
})
export class SAModule {}
