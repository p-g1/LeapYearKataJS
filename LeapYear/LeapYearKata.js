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

//renamed files

//changed file structure. Included tests within special file within leap year as that is a common practice in JS

//extended Number prototype with new method to allow semantic read within function.
