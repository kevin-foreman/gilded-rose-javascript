import { expect, describe, it } from "vitest";
import { Item, items, updateQuality } from "./gilded-rose.js";

describe("updateQuality", () => {
  it("reduces quality and sellIn of basic items by 1", () => {
    const testItem = new Item("basic", 5, 3);
    items.push(testItem);

    updateQuality();

    expect(testItem.sellIn).toBe(4);
    expect(testItem.quality).toBe(2);
  });
});

//This tests for Aged Brie:
describe("updateQuality", () => {
  it("increases Aged Brie quality the older it gets by 1 each day", () => {
    const testItem2 = new Item("Aged Brie", 5, 0);
    items.push(testItem2);

    updateQuality();

    expect(testItem2.sellIn).toBe(4);
    expect(testItem2.quality).toBe(1);
  });
});

//This tests for Sulfuras, Hand of Ragnaros:
describe("updateQuality", () => {
  it("Does not change sellIn days or quality for Sulfuras, Hand of Ragnaros each day", () =>{
    const testItem3 = new Item("Sulfuras, Hand of Ragnaros", 0, 80);
    items.push(testItem3);
  
    updateQuality();
  
    expect(testItem3.sellIn).toBe(0);
    expect(testItem3.quality).toBe(80);
  }); 
});

//This tests for Backstage passes to a TAFKAL80ETC concert:
describe("updateQuality", () => {
  it("Increases the quality by 2 when there are 10 days or less left each day", () =>{
    const testItem4 = new Item("Backstage passes to a TAFKAL80ETC concert", 10, 20);
    items.push(testItem4);
  
    updateQuality();
  
    expect(testItem4.sellIn).toBe(9);
    expect(testItem4.quality).toBe(22);
  }); 
});

//This tests for the quality of backstage passes to drop to zero once sellIn goes to zero
describe("updateQuality", () => {
  it("Backstage passes quality drops to 0 when there are 0 sellIn left", () =>{
    const testItem6 = new Item("Backstage passes to a TAFKAL80ETC concert", 0, 20);
    items.push(testItem6);
  
    updateQuality();
  
    expect(testItem6.sellIn).toBe(-1);
    expect(testItem6.quality).toBe(0);
  }); 
});

// To do this using the ItemFactory do this: const testItemX = new ItemFactory("name", "sellIn", "quality")
