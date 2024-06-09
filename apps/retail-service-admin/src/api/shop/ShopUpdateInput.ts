import { ReviewUpdateManyWithoutShopsInput } from "./ReviewUpdateManyWithoutShopsInput";
import { ServiceUpdateManyWithoutShopsInput } from "./ServiceUpdateManyWithoutShopsInput";

export type ShopUpdateInput = {
  address?: string | null;
  contact?: string | null;
  description?: string | null;
  name?: string | null;
  owner?: string | null;
  reviews?: ReviewUpdateManyWithoutShopsInput;
  services?: ServiceUpdateManyWithoutShopsInput;
};
