import { expect, test } from "vitest";
import { basename } from "path";
import {
  solvePart1,
  solvePart2,
  // solvePart3
} from "./index";

const part1In = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet
`;
const part1Ans = `142`;
test("solution for " + basename(__dirname) + " part 1", () => {
  expect(solvePart1(part1In)).toBe(part1Ans);
});

const part2In = `
two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen
`;
const part2Ans = `281`;
test("solution for " + basename(__dirname) + " part 2", () => {
  expect(solvePart2(part2In)).toBe(part2Ans);
});

// const part3In = `test`;
// const part3Ans = `test`;
// test("solution for " + basename(__dirname) + " part 3", () => {
//   expect(solvePart3(part2In)).toBe(part3Ans);
// });
