export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
  public passOneDay(item: Item) {
    if (!this.isAgedBrie(item) && !this.isBackStage(item)) {
      if (item.quality > 0) {
        if (!this.isSulfuras(item)) {
          item.quality = item.quality - 1;
        }
      }
    } else {
      if (item.quality < 50) {
        item.quality = item.quality + 1;
        if (this.isBackStage(item)) {
          if (item.sellIn < 11) {
            if (item.quality < 50) {
              item.quality = item.quality + 1;
            }
          }
          if (item.sellIn < 6) {
            if (item.quality < 50) {
              item.quality = item.quality + 1;
            }
          }
        }
      }
    }
    this.updateSellInDays(item);
    if (this.isExpired(item)) {
      this.updateQualityAfterExpired(item);
    }
  }

  private updateQualityAfterExpired(item: Item) {
    if (!this.isAgedBrie(item)) {
      if (!this.isBackStage(item)) {
        if (item.quality > 0) {
          if (!this.isSulfuras(item)) {
            item.quality = item.quality - 1;
          }
        }
      } else {
        item.quality = item.quality - item.quality;
      }
    } else {
      if (item.quality < 50) {
        item.quality = item.quality + 1;
      }
    }
  }

  private isExpired(item: Item) {
    return item.sellIn < 0;
  }

  private updateSellInDays(item: Item) {
    if (!this.isSulfuras(item)) {
      item.sellIn = item.sellIn - 1;
    }
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
