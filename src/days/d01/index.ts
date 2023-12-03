export function solvePart1(input: string) {
  return input
    .trim()
    .replaceAll(/[^0-9\n]/gm, "")
    .split("\n")
    .map((str) => Number(str[0] + str.at(-1)))
    .reduce((a, b) => a + b)
    .toString();
}
