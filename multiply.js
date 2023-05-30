module.exports = multiply = (x, y) => {
    if (x < 0 || y < 0) {
        return "This function does not allow for multiplication with a negative number. Please try again with two positive numbers.";
    }
    return x * y;
};
