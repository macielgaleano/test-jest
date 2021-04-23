const aux = ["pedro", "Jose"];

describe("Hello world", () => {
  test("1+1 = 2", () => {
    expect(1 + 1).toBe(2);
  });
  test("array, exist pedro", () => {
    expect(aux).toContain("pedro");
  });
  test("boolean", () => {
    expect(true).toBeTruthy();
  });
});
