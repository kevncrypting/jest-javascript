const subtract = require("./subtract");

describe("The Subtraction function", () => {
    test("returns the difference of two positive numbers", () => {
        expect(subtract(10, 5)).toBe(5);
    });

    test("does not allow for subtraction that results in a negative output", () => {
        expect(subtract(10, 12)).toBe(
            "This function does not allow for subtraction that results in a negative number. Please try again."
        );
    });
});
