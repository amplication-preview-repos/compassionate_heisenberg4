import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { ShopWhereUniqueInput } from "../shop/ShopWhereUniqueInput";

export type ServiceWhereInput = {
  appointments?: AppointmentListRelationFilter;
  description?: StringNullableFilter;
  duration?: IntNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  price?: FloatNullableFilter;
  shop?: ShopWhereUniqueInput;
};
