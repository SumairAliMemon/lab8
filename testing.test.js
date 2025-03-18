function add(a, b) {
    return a + b;
}

// Jest test cases
test("adds 2 + 3 to equal 5", () => {
    expect(add(2, 3)).toBe(5);
});

test("adds 5 + 7 to equal 12", () => {
    expect(add(5, 7)).toBe(12);
});
