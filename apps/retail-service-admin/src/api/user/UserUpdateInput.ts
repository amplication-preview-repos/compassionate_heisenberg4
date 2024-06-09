import { AppointmentUpdateManyWithoutUsersInput } from "./AppointmentUpdateManyWithoutUsersInput";
import { ReviewUpdateManyWithoutUsersInput } from "./ReviewUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  appointments?: AppointmentUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  reviews?: ReviewUpdateManyWithoutUsersInput;
  role?: "Option1" | null;
  roles?: InputJsonValue;
  username?: string;
};
