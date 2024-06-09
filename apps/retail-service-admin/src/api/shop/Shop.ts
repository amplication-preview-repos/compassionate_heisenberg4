import { Review } from "../review/Review";
import { Service } from "../service/Service";

export type Shop = {
  address: string | null;
  contact: string | null;
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  owner: string | null;
  reviews?: Array<Review>;
  services?: Array<Service>;
  updatedAt: Date;
};
