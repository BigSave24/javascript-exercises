const leapYears = function(year) {
  let leapYear = (year % 100 === 0) ?
    (year % 400 === 0) : (year % 4 === 0);

  return leapYear;
}

module.exports = leapYears
