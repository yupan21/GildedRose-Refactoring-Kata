import { Item } from "./Item";

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  passOneDay() {
    for (let item of this.items) {
      item.passOneDay();
    }

    return this.items;
  }


}
