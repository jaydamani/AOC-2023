import { expect, test } from "vitest";
import { basename } from "path";
import {
  solvePart1,
  solvePart2,
  // solvePart3
} from "./index";

const part1In = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green
`;
const part1Ans = `8`;
test("solution for " + basename(__dirname) + " part 1", () => {
  expect(solvePart1(part1In)).toBe(part1Ans);
});

const part2In = part1In;
const part2Ans = `2286`;
test("solution for " + basename(__dirname) + " part 2", () => {
  expect(solvePart2(part2In)).toBe(part2Ans);
});

// const part3In = `test`;
// const part3Ans = `test`;
// test("solution for " + basename(__dirname) + " part 3", () => {
//   expect(solvePart3(part2In)).toBe(part3Ans);
// });
