import { Item } from "./Item";


export class BackstagePass extends Item {
  constructor(sellIn, quality) {
    super('Backstage passes to a TAFKAL80ETC concert', sellIn, quality);
  }

  protected updateQuantityAfterExpired(): void {
    this.quality = this.quality - this.quality;
  }

  protected updateQuantity(): void {
    if (this.quality < 50) {
      this.quality = this.quality + 1;

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
}
