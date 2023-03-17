import { expect, describe, it } from "vitest";
import { items, ItemFactory } from "./gilded-rose.js";

describe("updateQuality", () => {
  it("reduces quality and sellIn of basic items by 1", () => {
    const testItem = new ItemFactory("+5 Dexterity Vest", 10, 20);
    items.push(testItem);

    testItem.updateQuality();

    expect(testItem.sellIn).toBe(9);
    expect(testItem.quality).toBe(19);
  });
});

//This tests for Aged Brie:
describe("updateQuality", () => {
  it("increases Aged Brie quality the older it gets by 1 each day", () => {
    const testItem2 = new ItemFactory("Aged Brie", 5, 0);
    items.push(testItem2);

    testItem2.updateQuality();

    expect(testItem2.sellIn).toBe(4);
    expect(testItem2.quality).toBe(1);
  });
});

// //This tests for Sulfuras, Hand of Ragnaros:
describe("updateQuality", () => {
  it("Does not change sellIn days or quality for Sulfuras, Hand of Ragnaros each day", () =>{
    const testItem3 = new ItemFactory("Sulfuras, Hand of Ragnaros", 0, 80);
    items.push(testItem3);
  
    testItem3.updateQuality();
  
    expect(testItem3.sellIn).toBe(0);
    expect(testItem3.quality).toBe(80);
  }); 
});

// //This tests for Backstage passes to a TAFKAL80ETC concert:
describe("updateQuality", () => {
  it("Increases the quality by 3 when there are 5 days or less left each day", () =>{
    const testItem4 = new ItemFactory("Backstage passes to a TAFKAL80ETC concert", 5, 20);
    items.push(testItem4);
  
    testItem4.updateQuality();
  
    expect(testItem4.sellIn).toBe(4);
    expect(testItem4.quality).toBe(23);
  }); 
});

//This tests for the quality of backstage passes to drop to zero once sellIn goes to zero
describe("updateQuality", () => {
  it("Backstage passes quality drops to 0 when there are 0 sellIn left", () =>{
    const testItem6 = new ItemFactory("Backstage passes to a TAFKAL80ETC concert", 0, 20);
    items.push(testItem6);
  
    testItem6.updateQuality();
  
    expect(testItem6.sellIn).toBe(-1);
    expect(testItem6.quality).toBe(0);
  }); 
});

// This tests for the double deprecation of Conjured items
describe("updateQuality", () => {
  it("checks to make sure Conjured items quality deprecates twice as fast each day", () =>{
    const testItem7 = new ItemFactory("Conjured Mana Cake", 2, 20);
    items.push(testItem7);
  
    testItem7.updateQuality();
  
    expect(testItem7.sellIn).toBe(1);
    expect(testItem7.quality).toBe(18);
  }); 
});

// To do this using the ItemFactory do this: const testItemX = new ItemFactory("name", "sellIn", "quality")
