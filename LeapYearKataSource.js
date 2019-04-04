exports.LeapYear = x => {
  if (x == 100 || x == 200 || x == 300) {
    return false;
  }

  if (x % 4 == 0) {
    return true;
  }

  return false;
};
