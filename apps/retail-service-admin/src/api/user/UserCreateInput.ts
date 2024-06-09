import { AppointmentCreateNestedManyWithoutUsersInput } from "./AppointmentCreateNestedManyWithoutUsersInput";
import { ReviewCreateNestedManyWithoutUsersInput } from "./ReviewCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  appointments?: AppointmentCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  reviews?: ReviewCreateNestedManyWithoutUsersInput;
  role?: "Option1" | null;
  roles: InputJsonValue;
  username: string;
};
