var reverseString = function(str) {
  let arrayStr = str.split('');
  return arrayStr.reverse().join('');
}

module.exports = reverseString