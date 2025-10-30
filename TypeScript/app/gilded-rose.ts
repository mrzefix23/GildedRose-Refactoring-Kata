export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name: string, sellIn: number, quality: number) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

const MAX_QUALITY = 50;
const MIN_QUALITY = 0;
const BACKSTAGE_PASS_THRESHOLD_HIGH = 10;
const BACKSTAGE_PASS_THRESHOLD_LOW = 5;

export class GildedRose {
  items: Item[];

  constructor(items: Item[] = []) {
    this.items = items;
  }

  updateQuality(): Item[] {
    for (const item of this.items) {
      this.updateItem(item);
    }
    return this.items;
  }

  private increaseQuality(item: Item, amount: number = 1): void {
    item.quality = Math.min(MAX_QUALITY, item.quality + amount);
  }

  private decreaseQuality(item: Item, amount: number = 1): void {
    item.quality = Math.max(MIN_QUALITY, item.quality - amount);
  }

  private updateItem(item: Item): void {
    switch (item.name) {
      case 'Aged Brie':
        this.updateAgedBrie(item);
        break;
      case 'Backstage passes to a TAFKAL80ETC concert':
        this.updateBackstagePass(item);
        break;
      case 'Sulfuras, Hand of Ragnaros':
        // nothing to do
        break;
      default:
        this.updateNormalItem(item);
        break;
    }
  }

  private updateAgedBrie(item: Item): void {
    this.increaseQuality(item);
    item.sellIn -= 1;
    if (item.sellIn < 0) {
      this.increaseQuality(item);
    }
  }

  private updateBackstagePass(item: Item): void {
    if (item.sellIn > BACKSTAGE_PASS_THRESHOLD_HIGH) {
      this.increaseQuality(item, 1);
    } else if (item.sellIn > BACKSTAGE_PASS_THRESHOLD_LOW) {
      this.increaseQuality(item, 2);
    } else if (item.sellIn > 0) {
      this.increaseQuality(item, 3);
    } else {
      item.quality = MIN_QUALITY;
    }

    item.sellIn -= 1;
  }

  private updateNormalItem(item: Item): void {
    this.decreaseQuality(item);
    item.sellIn -= 1;
    if (item.sellIn < 0) {
      this.decreaseQuality(item);
    }
  }
}