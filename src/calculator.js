/* ===== Calculator Engine (ロジック) ===== */

/**
 * 2つの数値を加算する
 */
export function add(a, b) {
  return a + b;
}

/**
 * 2つの数値を減算する
 */
export function subtract(a, b) {
  return a - b;
}

/**
 * 2つの数値を乗算する
 */
export function multiply(a, b) {
  return a * b;
}

/**
 * 2つの数値を除算する
 */
export function divide(a, b) {
  if (b === 0) {
    return 'Error';
  }
  return a / b;
}

/**
 * 演算子に応じて計算を実行する
 */
export function calculate(a, operator, b) {
  const numA = parseFloat(a);
  const numB = parseFloat(b);

  if (isNaN(numA) || isNaN(numB)) {
    return 'Error';
  }

  switch (operator) {
    case '+':
      return add(numA, numB);
    case '-':
      return subtract(numA, numB);
    case '*':
      return multiply(numA, numB);
    case '/':
      return divide(numA, numB);
    default:
      return 'Error';
  }
}

/**
 * 符号を反転する
 */
export function toggleSign(value) {
  const num = parseFloat(value);
  if (isNaN(num)) return '0';
  return (num * -1).toString();
}

/**
 * パーセント値に変換する
 */
export function toPercent(value) {
  const num = parseFloat(value);
  if (isNaN(num)) return '0';
  return (num / 100).toString();
}
