import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ReviewListRelationFilter } from "../review/ReviewListRelationFilter";
import { ServiceListRelationFilter } from "../service/ServiceListRelationFilter";

export type ShopWhereInput = {
  address?: StringNullableFilter;
  contact?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  owner?: StringNullableFilter;
  reviews?: ReviewListRelationFilter;
  services?: ServiceListRelationFilter;
};
