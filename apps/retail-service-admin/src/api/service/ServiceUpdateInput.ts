import { AppointmentUpdateManyWithoutServicesInput } from "./AppointmentUpdateManyWithoutServicesInput";
import { ShopWhereUniqueInput } from "../shop/ShopWhereUniqueInput";

export type ServiceUpdateInput = {
  appointments?: AppointmentUpdateManyWithoutServicesInput;
  description?: string | null;
  duration?: number | null;
  name?: string | null;
  price?: number | null;
  shop?: ShopWhereUniqueInput | null;
};
