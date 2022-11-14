import { Item } from "./Item";


export class AgedBrie extends Item {
  constructor(sellIn, quality) {
    super('Aged Brie', sellIn, quality);
  }

  protected updateQuantityAfterExpired(): void {
    if (this.quality < 50) {
      this.quality = this.quality + 1;
    }
    return;
  }

  protected updateQuantity(): void {
      if (this.quality < 50) {
        this.quality = this.quality + 1;
      }
  }
}
