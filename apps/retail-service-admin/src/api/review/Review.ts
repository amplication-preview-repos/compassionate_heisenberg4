import { Shop } from "../shop/Shop";
import { User } from "../user/User";

export type Review = {
  comment: string | null;
  createdAt: Date;
  dateTime: Date | null;
  id: string;
  rating: number | null;
  shop?: Shop | null;
  updatedAt: Date;
  user?: User | null;
};
