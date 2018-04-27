var caesar = function (str, shift) {
  let result = [];
  str.split('').forEach(char => {
    if (isLetter(char)) {
      const range = getRange(char)
      const displacement = shift % range.length;
      const offset = char.charCodeAt(0) - range[0];
      let index;

      if(displacement < 0) {
        index = offset + range.length + displacement; 
      } else {
        index = offset + displacement;
      }
      result.push(String.fromCharCode(range[0] + index % range.length));

    } else {
      result.push(char);
    }
  });
  return result.join('');
}

function isLetter(char) {
  const code = (char) => char.charCodeAt(0); 
  return inRange(code(char), code('A'), code('Z'))
    || inRange(code(char), code('a'), code('z'));
}

function inRange(x, start, end) {
  return (x - start) * (x - end) <= 0;
}

function getRange(char) {
  const code = (char) => char.charCodeAt(0);
  let result = [];
  let start, end;
  [start, end] = inRange(code(char), code('a'), code('z')) 
               ? [code('a'), code('z')]
               : [code('A'), code('Z')];

  for (let i = start; i <= end; i++) {
    result.push(i);    
  }
  return result;
}

module.exports = caesar