// module.exports is an alternative to exports (which is a shortcut)
// exports.perimeter = (x, y) => 2 * (x + y);
// exports.area = (x, y) => x * y;

module.exports = (x, y, callback) => {
    if (x <= 0 || y <= 0) {
        callback(new Error(`Rectangle dimensions must be greater than zero. Received ${x}, ${y}`))
    } else {
        setTimeout(() =>
            callback(null, {
                perimeter: () => 2 * (x + y),
                area: () => x * y
            }),
            2000
        );
    }
};

// Summary: We switched back to module.exports from just exports shorthand
// Then we made three parameters, x, y and callback - where callback is sent
// an error object if x or y are <= 0.
// If not, then we pass null as the error arg callback is looking for and for
// the second argument we pass an object with two functions to calculate values