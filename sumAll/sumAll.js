const sumAll = function(x, y) {
  let sum = 0;
  let min, max;

  if(typeof x === "number" && typeof y === "number"){
    if(x > 0 && y > 0){
      if(x < y){
        min = x;
        max = y;
      } else {
        min = y;
        max = x;
      }
    } else {
      return sum = "ERROR";
    }
  } else {
    return sum = "ERROR";
  };

  for(let i = min; i <= max; i++){
    sum += i;
  };

  return sum;
}

module.exports = sumAll
