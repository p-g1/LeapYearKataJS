const LeapYear = require("../LeapYearKata.js");
require("jest-each");

describe("should return correct boolean when given an integer", () => {
  test.each`
    input   | expectedResult
    ${16}   | ${true}
    ${9}    | ${false}
    ${20}   | ${true}
    ${36}   | ${true}
    ${100}  | ${false}
    ${200}  | ${false}
    ${300}  | ${false}
    ${400}  | ${true}
    ${800}  | ${true}
    ${1200} | ${true}
    
  `("$input converts to $expectedResult", ({ input, expectedResult }) => {
    expect(LeapYear.isLeapYear(input)).toBe(expectedResult);
  });
});
