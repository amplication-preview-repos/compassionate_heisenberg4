import { Service } from "../service/Service";
import { User } from "../user/User";

export type Appointment = {
  createdAt: Date;
  dateTime: Date | null;
  id: string;
  service?: Service | null;
  updatedAt: Date;
  user?: User | null;
};
