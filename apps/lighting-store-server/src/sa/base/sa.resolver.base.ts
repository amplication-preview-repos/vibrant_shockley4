/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { SA } from "./SA";
import { SACountArgs } from "./SACountArgs";
import { SAFindManyArgs } from "./SAFindManyArgs";
import { SAFindUniqueArgs } from "./SAFindUniqueArgs";
import { DeleteSAArgs } from "./DeleteSAArgs";
import { SAService } from "../sa.service";
@graphql.Resolver(() => SA)
export class SAResolverBase {
  constructor(protected readonly service: SAService) {}

  async _sasMeta(@graphql.Args() args: SACountArgs): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [SA])
  async sas(@graphql.Args() args: SAFindManyArgs): Promise<SA[]> {
    return this.service.sas(args);
  }

  @graphql.Query(() => SA, { nullable: true })
  async sa(@graphql.Args() args: SAFindUniqueArgs): Promise<SA | null> {
    const result = await this.service.sa(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => SA)
  async deleteSA(@graphql.Args() args: DeleteSAArgs): Promise<SA | null> {
    try {
      return await this.service.deleteSa(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
