import { Item } from "./Item";

export class AgedBrie extends Item {

  constructor(sellIn, quality) {
    super('Aged Brie', sellIn, quality);
  }

  protected isAgedBrie(item: Item): boolean {
    return true;
  }

  protected updateQualityAfterExpired(item: Item): void {
    this.increaseQuality();
  }

  protected updateQuality(item: Item): void {
    this.increaseQuality();
  }

}
