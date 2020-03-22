"use strict";

function decimalsUntilInteger(number) {
    if (arguments.length !== 1) {
        throw new Error("expected exactly 1 argument");
    }

    if (typeof number !== "number") {
        throw new TypeError("expected first argument to be a number");
    }

    const split = number.toString().split(".");

    let decimals = 0;

    if (split[1] !== undefined) {
        decimals = split[1].length;
    }

    return [decimals, parseInt(split.join(""))];
}

module.exports = {
    decimalsUntilInteger
};
