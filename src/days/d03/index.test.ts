import { expect, test } from "vitest";
import { basename } from "path";
import {
  solvePart1,
  solvePart2,
  // solvePart3
} from "./index";

const part1In = `
12.......*..
+.........34
.......-12..
..78........
..*....60...
78..........
.......23...
....90*12...
............
2.2......12.
.*.........*
1.1.......56
`;
const part1Ans = `413`;
test("solution for " + basename(__dirname) + " part 1", () => {
  expect(solvePart1(part1In)).toBe(part1Ans);
});

const part2In = part1In;
const part2Ans = "6756";
test("solution for " + basename(__dirname) + " part 2", () => {
  expect(solvePart2(part2In)).toBe(part2Ans);
});

// const part3In = `test`;
// const part3Ans = `test`;
// test("solution for " + basename(__dirname) + " part 3", () => {
//   expect(solvePart3(part2In)).toBe(part3Ans);
// });
