function flipString(string) {
	const arr = string.replace(/[', ]/g, "").split("")
	const fliped = arr.reverse().join("")
	return string === fliped
}

module.exports = flipString
