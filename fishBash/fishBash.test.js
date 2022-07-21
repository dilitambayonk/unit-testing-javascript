const fishBash = require("./index")

test("returns 1 for the number 1", () => {
	expect(fishBash(1)).toEqual(1)
})

test("returns 7 for the number 7", () => {
	expect(fishBash(7)).toEqual(7)
})

test('returns "fish" for the number 3', () => {
	expect(fishBash(3)).toEqual("fish")
})

test('returns "fish" for the number 9', () => {
	expect(fishBash(9)).toEqual("fish")
})

test('returns "bash" for the number 5', () => {
	expect(fishBash(5)).toEqual("bash")
})

test('returns "bash" for the number 10', () => {
	expect(fishBash(10)).toEqual("bash")
})

test('returns "fish bash" for the number 15', () => {
	expect(fishBash(15)).toEqual("fish bash")
})

test('returns "fish bash" for the number 30', () => {
	expect(fishBash(30)).toEqual("fish bash")
})
