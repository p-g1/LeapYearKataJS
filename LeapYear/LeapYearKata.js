exports.isLeapYear = year => {
  
  Number.prototype.isDivisibleBy = divisor => {
    return year % divisor == 0;
  }
  
  if (year.isDivisibleBy(100) && !year.isDivisibleBy(400)) {
    return false;
  }

  if (year.isDivisibleBy(4)) {
    return true;
  }

  return false;
};

