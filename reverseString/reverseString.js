const reverseString = function(word) {
  let reverseWord = [];

  for(let i = 0; i < word.length; i++){
    let char = word[i];
    reverseWord.unshift(char);
  }

  return reverseWord.join("");
}

module.exports = reverseString
