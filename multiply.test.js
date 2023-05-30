const multiply = require("./multiply");

describe("The Multiplication function", () => {
    test("returns the product of two positive numbers", () => {
        expect(multiply(5, 6)).toBe(30);
    });

    test("does not allow for multiplying with a negative number", () => {
        expect(multiply(5, -6)).toBe(
            "This function does not allow for multiplication with a negative number. Please try again with two positive numbers."
        );
    });
});
