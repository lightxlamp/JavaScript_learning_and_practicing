const { normalizeURL, getURLsFromHTML } = require("./crawl.js");

const { test, expect } = require("@jest/globals");

test("normalizeURL: strip protocol", () => {
  const input = "https://blog.boot.dev/path";
  const actual = normalizeURL(input);
  const expected = "blog.boot.dev/path";
  expect(actual).toEqual(expected);
});

test("normalizeURL: strip protocol HTTP", () => {
  const input = "http://blog.boot.dev/path";
  const actual = normalizeURL(input);
  const expected = "blog.boot.dev/path";
  expect(actual).toEqual(expected);
});

test("normalizeURL: remove trailing slashes", () => {
  const input = "https://blog.boot.dev/path/";
  const actual = normalizeURL(input);
  const expected = "blog.boot.dev/path";
  expect(actual).toEqual(expected);
});

test("normalizeURL: upper case. Capitals", () => {
  const input = "https://BLOG.boot.dev/path/";
  const actual = normalizeURL(input);
  const expected = "blog.boot.dev/path";
  expect(actual).toEqual(expected);
});

// ....

test("getURLsFromHTML - absolute", () => {
  const inputHTMLBody = `<html>
    <body>
        <a href="https://blog.boot.dev/path/"><span>Go to Boot.dev</span></a>
    </body>
</html>`;
  const inputBaseURL = "https://blog.boot.dev/path/";
  const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL);
  const expected = ["https://blog.boot.dev/path/"];
  expect(actual).toEqual(expected);
});

test("getURLsFromHTML - relative", () => {
  const inputHTMLBody = `<html>
    <body>
        <a href="/path/"><span>Go to Boot.dev</span></a>
    </body>
</html>`;
  const inputBaseURL = "https://blog.boot.dev";
  const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL);
  const expected = ["https://blog.boot.dev/path/"];
  expect(actual).toEqual(expected);
});

test("getURLsFromHTML - relative [NEGATIVE]", () => {
  const inputHTMLBody = `<html>
    <body>
        <a href="invalid"><span>Invalid URL</span></a>
    </body>
</html>`;
  const inputBaseURL = "https://blog.boot.dev";
  const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL);
  const expected = [];
  expect(actual).toEqual(expected);
});

test("getURLsFromHTML - both", () => {
  const inputHTMLBody = `<html>
    <body>
        <a href="/locations/"><span>Go to Boot.dev - Locations</span></a>
        <a href="https://blog.boot.dev/users/"><span>Go to Boot.dev - Users</span></a>
    </body>
</html>`;
  const inputBaseURL = "https://blog.boot.dev";
  const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL);
  const expected = [
    "https://blog.boot.dev/locations/",
    "https://blog.boot.dev/users/",
  ];
  expect(actual).toEqual(expected);
});
