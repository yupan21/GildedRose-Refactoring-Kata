export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  passOneDay() {
    for (let item of this.items) {
      if (!this.isAgedBrie(item) && !this.isBackStage(item)) {
        if (item.quality > 0) {
          if (!this.isSulfuras(item)) {
            item.quality = item.quality - 1
          }
        }
      } else {
        if (item.quality < 50) {
          item.quality = item.quality + 1
          if (this.isBackStage(item)) {
            if (item.sellIn < 11) {
              if (item.quality < 50) {
                item.quality = item.quality + 1
              }
            }
            if (item.sellIn < 6) {
              if (item.quality < 50) {
                item.quality = item.quality + 1
              }
            }
          }
        }
      }
      if (!this.isSulfuras(item)) {
        item.sellIn = item.sellIn - 1;
      }
      if (item.sellIn < 0) {
        if (!this.isAgedBrie(item)) {
          if (!this.isBackStage(item)) {
            if (item.quality > 0) {
              if (!this.isSulfuras(item)) {
                item.quality = item.quality - 1
              }
            }
          } else {
            item.quality = item.quality - item.quality
          }
        } else {
          if (item.quality < 50) {
            item.quality = item.quality + 1
          }
        }
      }
    }

    return this.items;
  }

  private isSulfuras(item: Item) {
    return item.name == 'Sulfuras, Hand of Ragnaros';
  }

  private isAgedBrie(item: Item) {
    return item.name == 'Aged Brie';
  }

  private isBackStage(item: Item) {
    return item.name == 'Backstage passes to a TAFKAL80ETC concert';
  }
}
