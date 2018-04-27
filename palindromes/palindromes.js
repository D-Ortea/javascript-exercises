var palindromes = function(str) {
  const parsedStrArray = str.toLowerCase().replace(/[\s.,!?]/g, '').split('');
  return parsedStrArray.join('') === parsedStrArray.reverse().join('');
}

module.exports = palindromes
