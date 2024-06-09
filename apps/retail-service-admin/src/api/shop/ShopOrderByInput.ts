import { SortOrder } from "../../util/SortOrder";

export type ShopOrderByInput = {
  address?: SortOrder;
  contact?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  owner?: SortOrder;
  updatedAt?: SortOrder;
};
