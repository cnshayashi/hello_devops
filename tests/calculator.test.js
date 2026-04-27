import { describe, it, expect } from "vitest";
import {
  add,
  subtract,
  multiply,
  divide,
  calculate,
  toggleSign,
  toPercent,
} from "../src/calculator.js";

describe("add()", () => {
  it("正の数同士を加算できる", () => {
    expect(add(2, 3)).toBe(5);
  });

  // ! 失敗するテストケース
  it("【意図的に失敗】加算結果が正しくない", () => {
    expect(add(1, 1)).toBe(3); // 実際は 2 なので失敗する
  });

  it("負の数を加算できる", () => {
    expect(add(-1, -2)).toBe(-3);
  });

  it("0を加算できる", () => {
    expect(add(5, 0)).toBe(5);
  });

  it("小数を加算できる", () => {
    expect(add(0.1, 0.2)).toBeCloseTo(0.3);
  });
});

describe("subtract()", () => {
  it("正の数同士を減算できる", () => {
    expect(subtract(5, 3)).toBe(2);
  });

  it("結果が負になる減算", () => {
    expect(subtract(3, 5)).toBe(-2);
  });

  it("0を減算できる", () => {
    expect(subtract(5, 0)).toBe(5);
  });
});

describe("multiply()", () => {
  it("正の数同士を乗算できる", () => {
    expect(multiply(3, 4)).toBe(12);
  });

  it("0を乗算すると0になる", () => {
    expect(multiply(5, 0)).toBe(0);
  });

  it("負の数同士を乗算すると正になる", () => {
    expect(multiply(-3, -4)).toBe(12);
  });
});

describe("divide()", () => {
  it("正の数同士を除算できる", () => {
    expect(divide(10, 2)).toBe(5);
  });

  it("割り切れない除算", () => {
    expect(divide(10, 3)).toBeCloseTo(3.3333, 4);
  });

  it("0で除算するとErrorを返す", () => {
    expect(divide(5, 0)).toBe("Error");
  });
});

describe("calculate()", () => {
  it("文字列の数値で加算できる", () => {
    expect(calculate("10", "+", "5")).toBe(15);
  });

  it("文字列の数値で減算できる", () => {
    expect(calculate("10", "-", "5")).toBe(5);
  });

  it("文字列の数値で乗算できる", () => {
    expect(calculate("10", "*", "5")).toBe(50);
  });

  it("文字列の数値で除算できる", () => {
    expect(calculate("10", "/", "5")).toBe(2);
  });

  it("不正な演算子でErrorを返す", () => {
    expect(calculate("10", "^", "5")).toBe("Error");
  });

  it("数値でない入力でErrorを返す", () => {
    expect(calculate("abc", "+", "5")).toBe("Error");
  });
});

describe("toggleSign()", () => {
  it("正の数を負にする", () => {
    expect(toggleSign("5")).toBe("-5");
  });

  it("負の数を正にする", () => {
    expect(toggleSign("-5")).toBe("5");
  });

  it("0はそのまま", () => {
    expect(toggleSign("0")).toBe("0");
  });

  it("不正な入力で0を返す", () => {
    expect(toggleSign("abc")).toBe("0");
  });
});

describe("toPercent()", () => {
  it("100を1にする", () => {
    expect(toPercent("100")).toBe("1");
  });

  it("50を0.5にする", () => {
    expect(toPercent("50")).toBe("0.5");
  });

  it("不正な入力で0を返す", () => {
    expect(toPercent("abc")).toBe("0");
  });
});
