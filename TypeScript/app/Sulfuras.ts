import { Item } from "./Item";


export class Sulfuras extends Item {
  constructor(sellIn, quality) {
    super('Sulfuras, Hand of Ragnaros', sellIn, quality);
  }

  protected updateQuantityAfterExpired(): void {
  }

  protected updateSellIn(): void {
  }

  protected updateQuantity(): void {
  }
}
