import { Appointment } from "../appointment/Appointment";
import { Shop } from "../shop/Shop";

export type Service = {
  appointments?: Array<Appointment>;
  createdAt: Date;
  description: string | null;
  duration: number | null;
  id: string;
  name: string | null;
  price: number | null;
  shop?: Shop | null;
  updatedAt: Date;
};
