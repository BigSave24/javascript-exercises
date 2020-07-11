const removeFromArray = function(array, ...args) {
  let newArr = [];
  let removeItems = args;

  for(let i = 0; i < array.length; i++){
    if(!removeItems.includes(array[i])){
      newArr.push(array[i]);
    }
  }

  return newArr;
}

module.exports = removeFromArray
