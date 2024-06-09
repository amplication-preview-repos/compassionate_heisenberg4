import { Appointment } from "../appointment/Appointment";
import { Review } from "../review/Review";
import { JsonValue } from "type-fest";

export type User = {
  appointments?: Array<Appointment>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  reviews?: Array<Review>;
  role?: "Option1" | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
