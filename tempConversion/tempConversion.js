var ftoc = function(temperature) {
  return round( (temperature - 32) * 5 / 9 );
}

var ctof = function(temperature) {
  return round( temperature *  9 / 5 + 32 );  
}

var round = number => Math.round(number * 10) / 10;

module.exports = {
  ftoc,
  ctof
}
