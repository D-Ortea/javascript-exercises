var snakeCase = function(str) {
  let result = str;
  if(str.match(/^[a-z]/)) {
    result = str.replace(/([a-z]+)([A-Z])/g, '$1_$2');
  }
  return result.replace(/[.?!,-]+/g, ' ')
               .replace(/\s+/g, ' ')
               .trim()
               .replace(/ /g, '_')
               .toLowerCase();
}

module.exports = snakeCase
