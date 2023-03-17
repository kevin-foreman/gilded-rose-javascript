export class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
  updateQuality() {
    // important stuff
  }
}

class BasicItem extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  };
  updateQuality() {
    if (this.sellIn >= 0 && this.quality > 1) {
      this.sellIn--;
      this.quality--;
    } else if (this.sellIn < 0) {
      this.quality = this.quality - 2;
    }
  }
};

class CheeseItem extends Item {
  constructor(name, sellIn, qualtity) {
    super(name, sellIn, qualtity);
  };
  updateQuality() {
    if (this.quality < 50) {
      this.quality++;
      this.sellIn--;
    }
  }
};

class LegendaryItem extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  };
  updateQuality() {
    // Do nothing???
  }
};

class PassItem extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  };
  updateQuality() {
    this.sellIn--;
    if (this.sellIn < 0) {
      this.quality = 0;
    } else if (this.sellIn < 6) {
      this.quality = this.quality + 3;
    } else if (this.sellIn < 11) {
      this.quality = this.quality + 2;
    }
  }
};

class ConjuredItem extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  };
  updateQuality() {
    this.sellIn--;
    this.quality = this.quality - 2;
  }
};

// Factory pattern
export function ItemFactory(name, sellIn, quality) {
  switch (name) {
    case "Aged Brie":
      return new CheeseItem(name, sellIn, quality);
    case "+5 Dexterity Vest":
    case "Elixir of the Mongoose":
      return new BasicItem(name, sellIn, quality);
    case "Sulfuras, Hand of Ragnaros":
      return new LegendaryItem(name, sellIn, quality);
    case "Backstage passes to a TAFKAL80ETC concert":
      return new PassItem(name, sellIn, quality);
    case "Conjured Mana Cake":
      return new ConjuredItem(name, sellIn, quality);
  };
};

// This works by implementing classes behind the scenes

export let items = [
  ItemFactory("Aged Brie", 2, 0),
  ItemFactory("+5 Dexterity Vest", 10, 20),
  ItemFactory("Elixir of the Mongoose", 5, 7),
  ItemFactory("Sulfuras, Hand of Ragnaros", 0, 80),
  ItemFactory("Backstage passes to a TAFKAL80ETC concert", 15, 20),
  ItemFactory("Conjured Mana Cake", 3, 6)
];
