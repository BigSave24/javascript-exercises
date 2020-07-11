const repeatString = function(word, num) {
  let output = '';
  let repeatWord = word;
  let repeatNumber = num;

  if(typeof repeatWord !== "string" || repeatNumber < 0){
    output += "ERROR";
  } else {
    for(let i = 0; i < repeatNumber; i++){
      output += repeatWord;
    };
  }

  return output;
}

module.exports = repeatString
