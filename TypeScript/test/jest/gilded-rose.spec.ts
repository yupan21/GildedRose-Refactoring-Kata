import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
  it('should foo', () => {
    let outPutStr: String = "";
    const items = [
      new Item("+5 Dexterity Vest", 10, 20), //
      new Item("Aged Brie", 2, 0), //
      new Item("Elixir of the Mongoose", 5, 7), //
      new Item("Sulfuras, Hand of Ragnaros", 0, 80), //
      new Item("Sulfuras, Hand of Ragnaros", -1, 80),
      new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
      // this conjured item does not work properly yet
      new Item("Conjured Mana Cake", 3, 6)];
    
    
    const gildedRose = new GildedRose(items);
    
    let days: number = 2;
    if (process.argv.length > 2) {
        days = +process.argv[2];
      }
    
    for (let i = 0; i < days; i++) {
      outPutStr = outPutStr + ("-------- day " + i + " --------")+"\n";
      console.log("-------- day " + i + " --------");
      outPutStr = outPutStr + "name, sellIn, quality"+"\n";
      console.log("name, sellIn, quality");
      items.forEach(element => {
        console.log(element.name + ' ' + element.sellIn + ' ' + element.quality);
        outPutStr = outPutStr + element.name + ' ' + element.sellIn + ' ' + element.quality+"\n";
    
      });
      console.log();
      gildedRose.passOneDay();
    }
    console.log(outPutStr)
    
    const expectStr: String = "-------- day 0 --------\n"+
    "name, sellIn, quality\n"+
    "+5 Dexterity Vest 10 20\n"+
    "Aged Brie 2 0\n"+
    "Elixir of the Mongoose 5 7\n"+
    "Sulfuras, Hand of Ragnaros 0 80\n"+
    "Sulfuras, Hand of Ragnaros -1 80\n"+
    "Backstage passes to a TAFKAL80ETC concert 15 20\n"+
    "Backstage passes to a TAFKAL80ETC concert 10 49\n"+
    "Backstage passes to a TAFKAL80ETC concert 5 49\n"+
    "Conjured Mana Cake 3 6\n"+
    "-------- day 1 --------\n"+
    "name, sellIn, quality\n"+
    "+5 Dexterity Vest 9 19\n"+
    "Aged Brie 1 1\n"+
    "Elixir of the Mongoose 4 6\n"+
    "Sulfuras, Hand of Ragnaros 0 80\n"+
    "Sulfuras, Hand of Ragnaros -1 80\n"+
    "Backstage passes to a TAFKAL80ETC concert 14 21\n"+
    "Backstage passes to a TAFKAL80ETC concert 9 50\n"+
    "Backstage passes to a TAFKAL80ETC concert 4 50\n"+
    "Conjured Mana Cake 2 5\n";
    expect(outPutStr).toBe(expectStr);
  });
});
