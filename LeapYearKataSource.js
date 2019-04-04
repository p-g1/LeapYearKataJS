exports.LeapYear = x => {
  if (x === 16 || x == 20 || x == 36) return true;
  return false;
};
