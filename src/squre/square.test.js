const square = require("./square");

describe("square", () => {
  //   test("Correct Value", () => {
  //     expect(square(2)).toBe(4);
  //   });
  //   test("Less Than", () => {
  //     expect(square(2)).toBeLessThan(5);
  //   });
  //   test("Greater then", () => {
  //     expect(square(2)).toBeGreaterThan(3);
  //   });
  //   test("Not to be Undefined", () => {
  //     expect(square(2)).not.toBeUndefined();
  //   });
  test("times amount", () => {
    const spyMathPow = jest.spyOn(Math, "pow");
    square(2);
    expect(spyMathPow).toBeCalledTimes(1);
  });
});
