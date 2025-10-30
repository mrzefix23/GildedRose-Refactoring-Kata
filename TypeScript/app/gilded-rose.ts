import { Item } from "./models/Item";
import { AgedBrieStrategy } from "./strategies/AgedBrieStrategy";
import { BackstagePassStrategy } from "./strategies/BackstagePassStrategy";
import { SulfurasStrategy } from "./strategies/SulfurasStrategy";
import { NormalItemStrategy } from "./strategies/NormalItemStrategy";
import { ItemStrategy } from "./strategies/ItemStrategy";

export class GildedRose {
  private strategies: Map<string, ItemStrategy>;

  constructor(public items: Item[]) {
    // Map item names to their corresponding strategies
    this.strategies = new Map<string, ItemStrategy>([
      ["Aged Brie", new AgedBrieStrategy()],
      ["Backstage passes to a TAFKAL80ETC concert", new BackstagePassStrategy()],
      ["Sulfuras, Hand of Ragnaros", new SulfurasStrategy()],
    ]);
  }

  // Updates quality for all items
  updateQuality(): Item[] {
    for (const item of this.items) {
      const strategy = this.strategies.get(item.name) || new NormalItemStrategy();
      strategy.update(item);
    }
    return this.items;
  }
}
