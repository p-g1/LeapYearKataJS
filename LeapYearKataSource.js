exports.LeapYear = x => {
  if (x % 100 == 0 && x != 400 && x != 800 && x != 1200) {
    return false;
  }

  if (x % 4 == 0) {
    return true;
  }

  return false;
};
