import { SAWhereInput } from "./SAWhereInput";
import { SAOrderByInput } from "./SAOrderByInput";

export type SAFindManyArgs = {
  where?: SAWhereInput;
  orderBy?: Array<SAOrderByInput>;
  skip?: number;
  take?: number;
};
