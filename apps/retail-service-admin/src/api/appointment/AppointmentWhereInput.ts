import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ServiceWhereUniqueInput } from "../service/ServiceWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AppointmentWhereInput = {
  dateTime?: DateTimeNullableFilter;
  id?: StringFilter;
  service?: ServiceWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
