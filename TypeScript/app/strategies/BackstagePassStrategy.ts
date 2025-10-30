import { Item } from "../models/Item";
import { ItemStrategy } from "./ItemStrategy";

const MAX_QUALITY = 50;
const MIN_QUALITY = 0;

export class BackstagePassStrategy implements ItemStrategy {
  update(item: Item): void {
    item.sellIn -= 1;
    if (item.sellIn < 0) {
      item.quality = MIN_QUALITY;
    } else if (item.sellIn < 5) {
      item.quality = Math.min(MAX_QUALITY, item.quality + 3);
    } else if (item.sellIn < 10) {
      item.quality = Math.min(MAX_QUALITY, item.quality + 2);
    } else {
      item.quality = Math.min(MAX_QUALITY, item.quality + 1);
    }
  }
}
