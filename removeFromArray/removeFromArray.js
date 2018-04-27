var removeFromArray = function() {
  const elemsToDelete = Array.from(arguments);
  let array = elemsToDelete.shift();
  for(let i=0; i < elemsToDelete.length; i++) {
    const index = array.indexOf(elemsToDelete[i]);
    if ( index !== -1 ) array.splice(index, 1);
  }
  return array;
}

module.exports = removeFromArray
