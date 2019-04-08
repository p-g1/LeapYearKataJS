const LeapYear = require("../LeapYearKata.js");

test("should return true when given 16", () => {
  expect(LeapYear.isLeapYear(16)).toBe(true);
});

test("should return false when given 9", () => {
  expect(LeapYear.isLeapYear(9)).toBe(false);
});

test("should return true when given 20", () => {
  expect(LeapYear.isLeapYear(20)).toBe(true);
});

test("should return true when given 36", () => {
  expect(LeapYear.isLeapYear(36)).toBe(true);
});

test("should return false when given 100", () => {
  expect(LeapYear.isLeapYear(100)).toBe(false);
});

test("should return false when given 200", () => {
  expect(LeapYear.isLeapYear(200)).toBe(false);
});

test("should return false when given 300", () => {
  expect(LeapYear.isLeapYear(300)).toBe(false);
});

test("should return true when given 400", () => {
  expect(LeapYear.isLeapYear(400)).toBe(true);
});

test("should return true when given 800", () => {
  expect(LeapYear.isLeapYear(800)).toBe(true);
});

test("should return true when given 1200", () => {
  expect(LeapYear.isLeapYear(1200)).toBe(true);
});
