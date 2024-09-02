import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SAServiceBase } from "./base/sa.service.base";

@Injectable()
export class SAService extends SAServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
