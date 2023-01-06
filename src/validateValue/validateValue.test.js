const validateValue = require("./validateValue");

describe("validateValue", () => {
  test("Correct value", () => {
    expect(validateValue(50)).toBe(true);
  });
  test("Less than correct value", () => {
    expect(validateValue(-10)).toBe(false);
  });
  test("Greater than correct value", () => {
    expect(validateValue(110)).toBe(false);
  });
  test("Edge case lower scenario", () => {
    expect(validateValue(0)).toBe(true);
  });
  test("Edge case higher scenario", () => {
    expect(validateValue(100)).toBe(true);
  });
});
