import { Item } from "../models/Item";
import { ItemStrategy } from "./ItemStrategy";

const MIN_QUALITY = 0;

export class NormalItemStrategy implements ItemStrategy {
  update(item: Item): void {
    item.sellIn -= 1;
    if (item.quality > MIN_QUALITY) {
      item.quality -= 1;
      if (item.sellIn < 0 && item.quality > MIN_QUALITY) {
        item.quality -= 1;
      }
    }
  }
}
