const { sortPages } = require("./report.js");

const { test, expect } = require("@jest/globals");

test("sortPages: Order by number of records", () => {
  const input = {
    'https://wagslane.dev' : 3,
    'https://wagslane.dev/path' : 1,
    'https://wagslane.dev/python' : 14,
    'https://wagslane.dev/javascript' : 21,
    'https://wagslane.dev/about' : 2,
  }
  const actual = sortPages(input);
  const expected = [
    ['https://wagslane.dev/javascript', 21],
    ['https://wagslane.dev/python', 14],
    ['https://wagslane.dev', 3],
    ['https://wagslane.dev/about', 2],
    ['https://wagslane.dev/path', 1],
  ]
  expect(actual).toEqual(expected);
});