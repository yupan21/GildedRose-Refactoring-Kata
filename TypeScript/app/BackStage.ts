import { Item } from "./Item";

export class Backstage extends Item {

  constructor(sellIn, quality) {
    super('Backstage passes to a TAFKAL80ETC concert', sellIn, quality);
  }

  protected isBackStage(item: Item): boolean {
    return true;
  }

  protected updateQualityAfterExpired(item: Item): void {
    this.quality = this.quality - this.quality;
  }

  protected updateQuality(item: Item): void {
    this.increaseQuality();

    if (this.sellIn < 11) {
      this.increaseQuality();
    }
    if (this.sellIn < 6) {
      this.increaseQuality();
    }

  }

  private increaseQuality() {
    if (this.quality < 50) {
      this.quality = this.quality + 1;
    }
  }
}
