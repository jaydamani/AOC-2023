export function solvePart1(input: string) {
  const cards = input.matchAll(/^Card\s+\d+\:\s+([\d\s]+) \|([\d\s]+?)$/gm);
  let total = 0;
  for (const card of cards) {
    const winners = card[1]
      .split(/\s+/)
      .filter((n) => (card[2] + " ").includes(" " + n + " "));
    if (winners.length) total += 2 ** (winners.length - 1);
  }
  return total.toString();
}
