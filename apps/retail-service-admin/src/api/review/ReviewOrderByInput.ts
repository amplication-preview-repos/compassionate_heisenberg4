import { SortOrder } from "../../util/SortOrder";

export type ReviewOrderByInput = {
  comment?: SortOrder;
  createdAt?: SortOrder;
  dateTime?: SortOrder;
  id?: SortOrder;
  rating?: SortOrder;
  shopId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
