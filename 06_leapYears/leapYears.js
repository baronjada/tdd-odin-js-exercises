const leapYears = function (...years) {
  for (const year of years) {
    if (year % 4 === 0) {
      if (year % 100 !== 0) {
        return true;
      } else if (year % 400 === 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
};

leapYears(1988, 2025, 2000, 1600);

// Do not edit below this line
module.exports = leapYears;
