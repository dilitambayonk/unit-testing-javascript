const flipString = require("./index")

test('returns true for "kodok"', () => {
	expect(flipString("kodok")).toEqual(true)
})

test('returns false for "kamu"', () => {
	expect(flipString("kamu")).toEqual(false)
})

test('returns false for "kasurrusak"', () => {
	expect(flipString("kasurrusak")).toEqual(true)
})
