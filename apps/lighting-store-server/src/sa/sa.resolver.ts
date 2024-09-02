import * as graphql from "@nestjs/graphql";
import { SAResolverBase } from "./base/sa.resolver.base";
import { SA } from "./base/SA";
import { SAService } from "./sa.service";

@graphql.Resolver(() => SA)
export class SAResolver extends SAResolverBase {
  constructor(protected readonly service: SAService) {
    super(service);
  }
}
