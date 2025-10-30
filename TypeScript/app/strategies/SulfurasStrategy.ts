import { Item } from "../models/Item";
import { ItemStrategy } from "./ItemStrategy";

export class SulfurasStrategy implements ItemStrategy {
  update(item: Item): void {
    // nothing to do
  }
}
