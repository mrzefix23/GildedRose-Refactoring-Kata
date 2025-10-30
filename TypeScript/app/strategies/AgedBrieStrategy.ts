import { Item } from "../models/Item";
import { ItemStrategy } from "./ItemStrategy";

const MAX_QUALITY = 50;

export class AgedBrieStrategy implements ItemStrategy {
  update(item: Item): void {
    item.sellIn -= 1;
    if (item.quality < MAX_QUALITY) {
      item.quality += 1;
      if (item.sellIn < 0 && item.quality < MAX_QUALITY) {
        item.quality += 1;
      }
    }
  }
}
