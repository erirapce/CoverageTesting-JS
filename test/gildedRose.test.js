const {Shop, Item} = require("../lib/gildedRose");

const gildedRose = new Shop([
	new Item("Sulfuras, Hand of Ragnaros", 3, 8),//first Item
	new Item("Love", 0, 0),//second Item
	new Item("Backstage passes to a TAFKAL80ETC concert", 0, 0),//third Item
	new Item("Love", 0, 2),//fourth Item
	new Item("Sulfuras, Hand of Ragnaros", -1, 0),//fifth Item
	new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),//sixth Item
	new Item("Backstage passes to a TAFKAL80ETC concert", 11, 49),//seventh Item
	new Item("Backstage passes to a TAFKAL80ETC concert", 11, 50),//eighth Item
	new Item("Aged Brie", 0, 2),//ninth Item
	new Item("Aged Brie", 0, 49)//tenth Item
								]);

const items = gildedRose.updateQuality();

/*
describe("a group of tests", () => {
	test("Sulfuras, Hand of Ragnaros, 3, 8", () => {

		expect(items[0].sellIn).toBe(3);
		expect(items[0].quality).toBe(8);
	});
});
*/

describe.each([
	[items[0].sellIn, 3],//first Item
	[items[0].quality, 8],

	[items[1].sellIn, -1],//second Item
	[items[1].quality, 0],

	[items[2].sellIn, -1],//third Item
	[items[2].quality, 0],

	[items[3].sellIn, -1],//fourth Item
	[items[3].quality, 0],

	[items[4].sellIn, -1],//fifth Item
	[items[4].quality, 0],

	[items[5].sellIn, 4],//sixth Item
	[items[5].quality, 50],

	[items[6].sellIn, 10],//seventh Item
	[items[6].quality, 50],

	[items[7].sellIn, 10],//eighth Item
	[items[7].quality, 50],

	[items[8].sellIn, -1],//ninth Item
	[items[8].quality, 4],

	[items[9].sellIn, -1],//tenth Item
	[items[9].quality, 50]
])(".updateQuality", (a, expected) => {

	test("Sulfuras, Hand of Ragnaros. sellIn", () => {//first Item
		expect(a).toBe(expected);
	});

	test("Sulfuras, Hand of Ragnaros. quality", () => {
		expect(a).toBe(expected);
	});

	test("Love. sellIn", () => {//second Item
		expect(a).toBe(expected);
	});

	test("Love. quality", () => {
		expect(a).toBe(expected);
	});

	test("Backstage passes to a TAFKAL80ETC concert. sellIn", () => {//third Item
		expect(a).toBe(expected);
	});

	test("Backstage passes to a TAFKAL80ETC concert. quality", () => {
		expect(a).toBe(expected);
	});

	test("Love. sellIn", () => {//fourth Item
		expect(a).toBe(expected);
	});

	test("Love. quality", () => {
		expect(a).toBe(expected);
	});

	test("Sulfuras, Hand of Ragnaros. sellIn", () => {//fifth Item
		expect(a).toBe(expected);
	});

	test("Sulfuras, Hand of Ragnaros. quality", () => {
		expect(a).toBe(expected);
	});

	test("Backstage passes to a TAFKAL80ETC concert. sellIn", () => {//sixth Item
		expect(a).toBe(expected);
	});

	test("Backstage passes to a TAFKAL80ETC concert. quality", () => {
		expect(a).toBe(expected);
	});

	test("Backstage passes to a TAFKAL80ETC concert. sellIn", () => {//seventh Item
		expect(a).toBe(expected);
	});

	test("Backstage passes to a TAFKAL80ETC concert. quality", () => {
		expect(a).toBe(expected);
	});

	test("Backstage passes to a TAFKAL80ETC concert. sellIn", () => {//eight Item
		expect(a).toBe(expected);
	});

	test("Backstage passes to a TAFKAL80ETC concert. quality", () => {
		expect(a).toBe(expected);
	});

	test("Aged Brie. sellIn", () => {//ninth Item
		expect(a).toBe(expected);
	});

	test("Aged Brie. quality", () => {
		expect(a).toBe(expected);
	});

	test("Aged Brie. sellIn", () => {//tenth Item
		expect(a).toBe(expected);
	});

	test("Aged Brie. quality", () => {
		expect(a).toBe(expected);
	});
});
