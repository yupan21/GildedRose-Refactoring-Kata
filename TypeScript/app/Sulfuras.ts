import { Item } from "./Item";

export class Sulfuras extends Item {

  constructor(sellIn, quality) {
    super('Sulfuras, Hand of Ragnaros', sellIn, quality);
  }

  protected isSulfuras(item: Item): boolean {
    return true;
  }

  protected updateSellInDays(item: Item): void {

  }

  protected updateQualityAfterExpired(item: Item): void {
    
  }

  protected updateQuality(item: Item): void {
    
  }
}
