import { ShopWhereUniqueInput } from "../shop/ShopWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReviewUpdateInput = {
  comment?: string | null;
  dateTime?: Date | null;
  rating?: number | null;
  shop?: ShopWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
