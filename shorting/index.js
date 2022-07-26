function sortAscending(array) {
	var done = false
	while (!done) {
		done = true
		for (var i = 1; i < array.length; i += 1) {
			if (array[i - 1] > array[i]) {
				done = false
				var tmp = array[i - 1]
				array[i - 1] = array[i]
				array[i] = tmp
			}
		}
	}

	return array
}

function sortDescending(array) {
	var done = false
	while (!done) {
		done = true
		for (var i = 1; i < array.length; i += 1) {
			if (array[i - 1] < array[i]) {
				done = false
				var tmp = array[i - 1]
				array[i - 1] = array[i]
				array[i] = tmp
			}
		}
	}

	return array
}

module.exports = { sortAscending, sortDescending }
