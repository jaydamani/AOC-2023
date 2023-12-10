import { expect, test } from "vitest";
import { basename } from "path";
import {
  solvePart1,
  // solvePart2,
  // solvePart3
} from "./index";

const part1In = `
Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
Card 3:  1 21 53 59 44 | 69 82 53 72 16 21 14 11
Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11
`;
const part1Ans = `13`;
test("solution for " + basename(__dirname) + " part 1", () => {
  expect(solvePart1(part1In)).toBe(part1Ans);
});

// const part2In = `test`;
// const part2Ans = `test`;
// test("solution for " + basename(__dirname) + " part 2", () => {
//   expect(solvePart2(part2In)).toBe(part2Ans);
// });

// const part3In = `test`;
// const part3Ans = `test`;
// test("solution for " + basename(__dirname) + " part 3", () => {
//   expect(solvePart3(part2In)).toBe(part3Ans);
// });
