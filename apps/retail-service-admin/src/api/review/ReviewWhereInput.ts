import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { ShopWhereUniqueInput } from "../shop/ShopWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReviewWhereInput = {
  comment?: StringNullableFilter;
  dateTime?: DateTimeNullableFilter;
  id?: StringFilter;
  rating?: IntNullableFilter;
  shop?: ShopWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
