// sum.test.js
import { expect, test } from "vitest";
import { solvePart1 } from "./index";
import { basename } from "path";

const part1In = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet
`;
const part1Ans = `142`;

test("solution for " + basename(__dirname).replace(/d0?/, "day "), () => {
  expect(solvePart1(part1In)).toBe(part1Ans);
});
