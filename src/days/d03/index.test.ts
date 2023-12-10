import { expect, test } from "vitest";
import { basename } from "path";
import {
  solvePart1,
  solvePart2,
  // solvePart3
} from "./index";

const part1In = `
467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..

`;
const part1Ans = `4361`;
test("solution for " + basename(__dirname) + " part 1", () => {
  expect(solvePart1(part1In)).toBe(part1Ans);
});

const part2In = part1In;
const part2Ans = "467835";
test("solution for " + basename(__dirname) + " part 2", () => {
  expect(solvePart2(part2In)).toBe(part2Ans);
});

// const part3In = `test`;
// const part3Ans = `test`;
// test("solution for " + basename(__dirname) + " part 3", () => {
//   expect(solvePart3(part2In)).toBe(part3Ans);
// });
