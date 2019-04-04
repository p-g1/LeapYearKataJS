const LeapYear = require("./LeapYearKataSource.js");

test("should return true when given 16", () => {
  expect(LeapYear.LeapYear(16)).toBe(true);
});
