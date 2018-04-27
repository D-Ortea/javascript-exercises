var repeatString = function(str, repetitions) {
  if( repetitions < 0 ) {
    return 'ERROR';
  }
  let result = '';
  for(let i=0; i < repetitions; i++) {
    result += str;
  }
  return result;
}

module.exports = repeatString
