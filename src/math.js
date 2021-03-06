"use strict";

import { decimalsUntilInteger } from "./utils.js";

export function add(number1, number2) {
    if (arguments.length !== 2) {
        throw new Error("expected exactly 2 arguments");
    }

    if (typeof number1 !== "number") {
        throw new TypeError("expected first argument to be a number");
    }

    if (typeof number2 !== "number") {
        throw new TypeError("expected second argument to be a number");
    }

    let [ number1Decimals, number1Integer ] = decimalsUntilInteger(number1);
    let [ number2Decimals, number2Integer ] = decimalsUntilInteger(number2);

    if (number1Decimals > number2Decimals) {
        number2Integer = number2Integer * ( 10 ** ( number1Decimals - number2Decimals ) );
    } else if (number2Decimals > number1Decimals) {
        number1Integer = number1Integer * ( 10 ** ( number2Decimals - number1Decimals ) );
    }

    return ( number1Integer + number2Integer ) / ( 10 ** Math.max( number1Decimals, number2Decimals ) );
}

export function divide(number1, number2) {
    if (arguments.length !== 2) {
        throw new Error("expected exactly 2 arguments");
    }

    if (typeof number1 !== "number") {
        throw new TypeError("expected first argument to be a number");
    }

    if (typeof number2 !== "number") {
        throw new TypeError("expected second argument to be a number");
    }

    const [ number1Decimals, number1Integer ] = decimalsUntilInteger(number1);
    const [ number2Decimals, number2Integer ] = decimalsUntilInteger(number2);

    return ( number1Integer / number2Integer ) / ( 10 ** ( number1Decimals - number2Decimals ) );
}

export function multiply(number1, number2) {
    if (arguments.length !== 2) {
        throw new Error("expected exactly 2 arguments");
    }

    if (typeof number1 !== "number") {
        throw new TypeError("expected first argument to be a number");
    }

    if (typeof number2 !== "number") {
        throw new TypeError("expected second argument to be a number");
    }

    const [ number1Decimals, number1Integer ] = decimalsUntilInteger(number1);
    const [ number2Decimals, number2Integer ] = decimalsUntilInteger(number2);

    return ( number1Integer * number2Integer ) / ( 10 ** ( number1Decimals + number2Decimals ) );
}

export function subtract(number1, number2) {
    if (arguments.length !== 2) {
        throw new Error("expected exactly 2 arguments");
    }

    if (typeof number1 !== "number") {
        throw new TypeError("expected first argument to be a number");
    }

    if (typeof number2 !== "number") {
        throw new TypeError("expected second argument to be a number");
    }

    let [ number1Decimals, number1Integer ] = decimalsUntilInteger(number1);
    let [ number2Decimals, number2Integer ] = decimalsUntilInteger(number2);

    if (number1Decimals > number2Decimals) {
        number2Integer = number2Integer * ( 10 ** ( number1Decimals - number2Decimals ) );
    } else if (number2Decimals > number1Decimals) {
        number1Integer = number1Integer * ( 10 ** ( number2Decimals - number1Decimals ) );
    }

    return ( number1Integer - number2Integer ) / ( 10 ** Math.max( number1Decimals, number2Decimals ) );
}

subtract(0.2, 4);
