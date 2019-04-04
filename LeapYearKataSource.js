exports.LeapYear = x => {
  if (x == 100) {
    return false;
  }

  if (x % 4 == 0) {
    return true;
  }

  return false;
};
