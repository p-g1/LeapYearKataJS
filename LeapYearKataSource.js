exports.LeapYear = x => {
  if (x % 100 == 0 && x != 400 && x != 800) {
    return false;
  }

  if (x % 4 == 0) {
    return true;
  }

  return false;
};
