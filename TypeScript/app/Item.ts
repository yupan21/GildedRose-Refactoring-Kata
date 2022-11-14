export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  public passOneDay() {
    this.updateQuantity();
    this.updateSellIn();
    if (this.isExpired()) {
      this.updateQuantityAfterExpired();
    }
  }

  protected updateQuantity() {
   
    if (this.quality > 0) {
      this.quality = this.quality - 1;
    }

  }

  protected updateQuantityAfterExpired() {
    if (this.quality > 0) {
      this.quality = this.quality - 1;
    }
  }

  private isExpired() {
    return this.sellIn < 0;
  }

  protected updateSellIn() {
    this.sellIn = this.sellIn - 1;
  }

  private isSulfuras() {
    return this.name == 'Sulfuras, Hand of Ragnaros';
  }

  private isAgedBrie() {
    return this.name == 'Aged Brie';
  }

  private isBackstagePass() {
    return this.name == 'Backstage passes to a TAFKAL80ETC concert';
  }
}

