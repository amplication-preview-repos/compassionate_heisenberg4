import { ReviewCreateNestedManyWithoutShopsInput } from "./ReviewCreateNestedManyWithoutShopsInput";
import { ServiceCreateNestedManyWithoutShopsInput } from "./ServiceCreateNestedManyWithoutShopsInput";

export type ShopCreateInput = {
  address?: string | null;
  contact?: string | null;
  description?: string | null;
  name?: string | null;
  owner?: string | null;
  reviews?: ReviewCreateNestedManyWithoutShopsInput;
  services?: ServiceCreateNestedManyWithoutShopsInput;
};
