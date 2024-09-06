describe("calculator.js", function () {
  it("large amount of number", function () {
    let result = add("1\n2,3000000000,4124234");
    expect(result).toBe(3004124234);
  });
  it("/n in string", function () {
    let result = add("1\n2,3");
    expect(result).toBe(6);
  });
  it("Delimiter in string", function () {
    let result = add("//;\n1;2");
    expect(result).toBe(3);
  });
});
