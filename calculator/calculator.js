function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (array) {
	return array.reduce((acc, val) => acc + val, 0);
}

function multiply (array) {
	return array.reduce((acc, val) => acc * val, 1);
}

function power(base, exp) {
	return Math.pow(base, exp);
}

function factorial(x) {
	if(x === 0 || x === 1){
		return 1;
	}
	return x * factorial(x-1);
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}