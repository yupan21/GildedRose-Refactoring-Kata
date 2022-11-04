import { Item } from "./Item";

export class AgedBrie extends Item{

  constructor(sellIn, quality) {
    super('Aged Brie', sellIn, quality);
  }
  
  protected isAgedBrie(item: Item): boolean {
    return true;
  }
}
