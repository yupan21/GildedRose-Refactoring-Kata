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
    this.updateSellInDays(item);
    this.updateQuality(item);
    if (this.isExpired(item)) {
      this.updateQualityAfterExpired(item);
    }
  }

  private updateQuality(item: Item) {
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
  }

  private updateQualityAfterExpired(item: Item) {
    if (this.isAgedBrie(item)) {
      if (item.quality < 50) {
        item.quality = item.quality + 1;
      }
      return;
    }
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
    } 
  }

  private isExpired(item: Item) {
    return item.sellIn < 0;
  }

  private updateSellInDays(item: Item) {
    if (this.isSulfuras(item)) {
      return;
    }
    item.sellIn = item.sellIn - 1;
  }

  protected isSulfuras(item: Item) {
    return false;
  }

  protected isAgedBrie(item: Item) {
    return false;
  }

  protected isBackStage(item: Item) {
    return false;
  }
}
