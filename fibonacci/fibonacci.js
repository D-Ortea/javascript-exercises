var fibonacci = function(x) {
  if(+x < 0) {
    return 'OOPS';
  }
  if(+x < 2) {
    return +x;
  }
  return fibonacci(x - 1) + fibonacci(x - 2);
}

module.exports = fibonacci
