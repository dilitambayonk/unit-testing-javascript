const { sortAscending, sortDescending } = require("./index")

test("return [10, 11, 12, 13,14, 15, 16] for short ascending", () => {
	expect(sortAscending([12, 10, 15, 11, 14, 16, 13])).toEqual([10, 11, 12, 13, 14, 15, 16])
})

test("return [10, 11, 12, 13,14, 15, 16] for short descending", () => {
	expect(sortDescending([12, 10, 15, 11, 14, 16, 13])).toEqual([16, 15, 14, 13, 12, 11, 10])
})
