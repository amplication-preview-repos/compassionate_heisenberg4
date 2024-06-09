import { SortOrder } from "../../util/SortOrder";

export type AppointmentOrderByInput = {
  createdAt?: SortOrder;
  dateTime?: SortOrder;
  id?: SortOrder;
  serviceId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
