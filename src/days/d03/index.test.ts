import { expect, test } from "vitest";
import { basename } from "path";
import {
  solvePart1,
  // solvePart2,
  // solvePart3
} from "./index";

const part1In = `
****************************
....**.....*************....
111.**.102.*************.111
....**.....*************....
****************************
`;
const part1Ans = `0`;
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
