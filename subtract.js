module.exports = subtract = (x, y) => {
    if (x - y < 0) {
        return "This function does not allow for subtraction that results in a negative number. Please try again.";
    }

    return x - y;
};
