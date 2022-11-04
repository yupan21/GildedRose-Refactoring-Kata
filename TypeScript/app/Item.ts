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

  protected updateQuality(item: Item) {
    this.decreaseQuality();
  }

  private decreaseQuality() {
    if (this.quality > 0) {
      this.quality = this.quality - 1;
    }
  }

  protected updateQualityAfterExpired(item: Item) {
    this.decreaseQuality();
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
