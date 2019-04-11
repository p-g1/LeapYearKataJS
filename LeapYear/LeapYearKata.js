exports.isLeapYear = year => {
  Number.prototype.isDivisibleBy = divisor => {
    return year % divisor == 0;
  };

  return (
    year.isDivisibleBy(4) &&
    (!year.isDivisibleBy(100) || year.isDivisibleBy(400))
  );
};
