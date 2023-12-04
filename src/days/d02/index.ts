const pattern = /^Game (\d+): (.+)$/gm;
const maxValid: Record<string, number> = {
  red: 12,
  blue: 14,
  green: 13,
};

export function solvePart1(input: string) {
  return Array.from(parse(input))
    .filter((e) => e.valid)
    .reduce((a, b) => a + +b.id, 0)
    .toString();
}

export function solvePart2(input: string) {
  return Array.from(parse(input))
    .reduce((a, b) => a + +b.power, 0)
    .toString();
}

function* parse(input: string) {
  const list = input.matchAll(pattern);
  for (const item of list) {
    const id = item[1];
    let valid = true;
    const requiredBalls: Record<string, number> = {
      red: 1,
      blue: 1,
      green: 1,
    };
    const sets: Record<string, number>[] = [];
    for (const set of item[2].split(/; ?/)) {
      const balls: Record<string, number> = {};
      for (const str of set.split(", ")) {
        const [_amt, color] = str.split(" ");
        const amt = +_amt;
        if (amt > maxValid[color]) valid = false;
        requiredBalls[color] = Math.max(requiredBalls[color], amt);
        balls[color] = amt;
      }
      sets.push(balls);
    }
    const power = requiredBalls.red * requiredBalls.blue * requiredBalls.green;
    yield { id, sets, valid, power };
  }
}
