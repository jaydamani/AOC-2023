export function solvePart1(input: string) {
  return input
    .trim()
    .replaceAll(/[^0-9\n]/g, "")
    .split("\n")
    .reduce((a, b) => a + Number(b[0] + b.at(-1)), 0)
    .toString();
}

const replacements = {
  zero: "0o",
  one: "o1e",
  two: "t2o",
  three: "t3e",
  four: "4",
  five: "5e",
  six: "6",
  seven: "7n",
  eight: "e8t",
  nine: "n9e",
};

export function solvePart2(input: string) {
  for (const word in replacements) {
    input = input.replaceAll(
      word,
      replacements[word as keyof typeof replacements]
    );
  }
  return solvePart1(input);
}
