import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SAService } from "./sa.service";
import { SAControllerBase } from "./base/sa.controller.base";

@swagger.ApiTags("sas")
@common.Controller("sas")
export class SAController extends SAControllerBase {
  constructor(protected readonly service: SAService) {
    super(service);
  }
}
