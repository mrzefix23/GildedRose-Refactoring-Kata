import { Item } from "../models/Item";

export interface ItemStrategy {
  update(item: Item): void;
}
