const {Shop, Item} = require("../lib/gildedRose");

describe("a group of tests", () => {
	test("should do sth", () => {
		const gildedRose = new Shop([new Item("item name", 0, 0)]);
		const items = gildedRose.updateQuality();
		expect(items[0].name).toBe("fixme");
	});
});
