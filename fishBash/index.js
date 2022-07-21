function fishBash(num) {
	if (num % 15 == 0) return "fish bash"
	else if (num % 3 == 0) return "fish"
	else if (num % 5 == 0) return "bash"
	else return num
}

module.exports = fishBash
