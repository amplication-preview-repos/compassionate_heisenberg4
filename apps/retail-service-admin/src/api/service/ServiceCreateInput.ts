import { AppointmentCreateNestedManyWithoutServicesInput } from "./AppointmentCreateNestedManyWithoutServicesInput";
import { ShopWhereUniqueInput } from "../shop/ShopWhereUniqueInput";

export type ServiceCreateInput = {
  appointments?: AppointmentCreateNestedManyWithoutServicesInput;
  description?: string | null;
  duration?: number | null;
  name?: string | null;
  price?: number | null;
  shop?: ShopWhereUniqueInput | null;
};
