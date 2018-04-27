// Gauss method to calculate the sum of n consecutive numbers
// between a and b.
var sumAll = function(a, b) {
  if ( isNaN(a) || isNaN(b) || typeof a !== 'number' || typeof b !== 'number'
      || a < 0 || b < 0) {
        return 'ERROR';
      }
  if ( a > b ) {
    [a, b] = [b, a]
  }
  return (a + b) * ((b - a + 1) / 2);
}

module.exports = sumAll