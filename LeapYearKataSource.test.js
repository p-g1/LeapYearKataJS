const LeapYear = require("./LeapYearKataSource.js");

test("should return true when given 16", () => {
  expect(LeapYear.LeapYear(16)).toBe(true);
});

test("should return false when given 9", () => {
  expect(LeapYear.LeapYear(9)).toBe(false);
});

test("should return true when given 20", () => {
  expect(LeapYear.LeapYear(20)).toBe(true);
});
