const ftoc = function(temp) {
  let convertTemp = (temp.toFixed(1) - 32) * 5/9;
  let celsius = Math.round(convertTemp * 10) / 10;
  return celsius;
}

const ctof = function(temp) {
  let convertTemp = temp.toFixed(1) * 9 / 5 + 32;
  let fahrenheit = Math.round(convertTemp * 10) / 10;
  return fahrenheit;
}

module.exports = {
  ftoc,
  ctof
}
