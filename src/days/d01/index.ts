export function solvePart1(input: string) {
  return input
    .trim()
    .replaceAll(/[^0-9\n]/g, "")
    .split("\n")
    .reduce((a, b) => a + Number(b[0] + b.at(-1)), 0)
    .toString();
}
