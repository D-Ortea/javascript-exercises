function translate(str) {
	return str
		.split(' ')
		.map(word => {
			if (word.match(/^[aiueo]\w+/)) {
				return word += 'ay';
			} else if (word.match(/^[^aiueo]*qu\w+/)) {
				let consonantNum = word.match(/(^[^aiueo]*qu)\w+/)[1];
				return word.slice(consonantNum.length) + word.slice(0, consonantNum.length) + 'ay';
			} else if (word.match(/^[^aiueo]{2,}\w+/)) {
				let consonantNum = word.match(/(^[^aiueo]{2,})\w+/)[1];
				return word.slice(consonantNum.length) + word.slice(0, consonantNum.length) + 'ay';
			} else {
				return word.slice(1) + word.slice(0, 1) + 'ay';
			}
		})
		.join(' ');
}


module.exports = {
	translate
}

