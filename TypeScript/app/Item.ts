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
    if (this.isAgedBrie(item) || this.isBackStage(item)) {
      if (this.quality < 50) {
        this.quality = this.quality + 1;
        if (this.isBackStage(item)) {
          if (this.sellIn < 11) {
            if (this.quality < 50) {
              this.quality = this.quality + 1;
            }
          }
          if (this.sellIn < 6) {
            if (this.quality < 50) {
              this.quality = this.quality + 1;
            }
          }
        }
      }
      return;
    }

    if (this.quality > 0) {
      if (!this.isSulfuras(item)) {
        this.quality = this.quality - 1;
      }
    }
  }

  protected updateQualityAfterExpired(item: Item) {
    if (this.quality <= 0) {
      return;
    }
    this.quality = this.quality - 1;
  }

  private isExpired(item: Item) {
    return this.sellIn < 0;
  }

  protected updateSellInDays(item: Item) {
    this.sellIn = this.sellIn - 1;
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
