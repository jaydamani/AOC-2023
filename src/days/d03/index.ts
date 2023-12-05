const nonSymbol = /[0-9\.]/;

export function solvePart1(input: string) {
  let total = 0;
  const inputArr = input.split("\n");
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
      if (!hasAdjacentSymbols(inputArr, i, j, num.length)) continue;
      total += +num;
    }
  }
  return total.toString();
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
