import { SA as TSA } from "../api/sa/SA";

export const SA_TITLE_FIELD = "id";

export const SATitle = (record: TSA): string => {
  return record.id?.toString() || String(record.id);
};
