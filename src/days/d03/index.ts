const nonSymbol = /[0-9\.]/;

export function solvePart1(input: string) {
  let total = 0;
  const inputArr = input.split("\n");
  for (const { i, j, num } of getNumbers(inputArr)) {
    if (!hasAdjacentSymbols(inputArr, i, j, num.length)) continue;
    total += +num;
  }
  return total.toString();
}

export function solvePart2(input: string) {
  const gearMap: Record<string, number[]> = {};
  const inputArr = input.split("\n");
  for (const { i: row, j: column, num } of getNumbers(inputArr)) {
    checkGear(inputArr, row, column, +num, gearMap);
    checkGear(inputArr, row, column - num.length - 1, +num, gearMap);

    for (let i = -1; i < num.length + 1; i++) {
      checkGear(inputArr, row - 1, column + i - num.length, +num, gearMap);
      checkGear(inputArr, row + 1, column + i - num.length, +num, gearMap);
    }
  }
  let total = 0;
  console.log(gearMap);
  for (const nums of Object.values(gearMap)) {
    if (nums.length > 1) total += nums.reduce((a, b) => a * b);
  }
  return total.toString();
}

function checkGear(
  input: string[],
  row: number,
  column: number,
  num: number,
  gearMap: Record<string, number[]>
) {
  if (row < 0 || row >= input.length) return;
  if (column < 0 || column >= input[row].length) return;
  if (input[row][column] !== "*") return;
  (gearMap[row + "|" + column] ??= []).push(num);
}

function* getNumbers(inputArr: string[]) {
  for (let i = 0; i < inputArr.length; i++) {
    for (let j = 0; j < inputArr[i].length; j++) {
      let char = inputArr[i][j];
      let num = "";
      while (/[0-9]/.test(char)) {
        if (j == inputArr[i].length) {
          break;
        }
        num += char;
        j++;
        char = inputArr[i][j];
      }
      if (!num.length) continue;
      yield { num, i, j };
    }
  }
}

function hasAdjacentSymbols(
  input: string[],
  row: number,
  column: number,
  len: number
) {
  if (isSymbol(input, row, column)) return true;
  if (isSymbol(input, row, column - len - 1)) return true;

  for (let i = -1; i < len + 1; i++) {
    if (isSymbol(input, row - 1, column + i - len)) return true;
    if (isSymbol(input, row + 1, column + i - len)) return true;
  }
  return false;
}

function isSymbol(input: string[], row: number, column: number) {
  if (row < 0 || row >= input.length) return false;
  if (column < 0 || column >= input[row].length) return false;
  if (nonSymbol.test(input[row][column])) return false;
  return true;
}
