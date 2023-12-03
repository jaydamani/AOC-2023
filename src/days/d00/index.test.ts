// sum.test.js
import { expect, test } from "vitest";
import { solvePart1 } from "./index";
import { basename } from "path";

const part1In = `test`;
const part1Ans = `test`;

test("solution for " + basename(__dirname), () => {
  expect(solvePart1(part1In)).toBe(part1Ans);
});
