"use strict";

const { describe, it } = require("mocha");
const { expect } = require("chai");
const { decimalsUntilInteger } = require("../src/utils");

describe("utils", function() {
    describe("decimalsUntilInteger", function() {
        it("should throw an error if providing an incorrect amount of arguments", function() {
            expect(() => decimalsUntilInteger(1)).to.not.throw(Error);
            expect(() => decimalsUntilInteger()).to.throw(Error);
            expect(() => decimalsUntilInteger(1, 2)).to.throw(Error);
        });

        it("should throw an error if the first argument is not a number", function() {
            expect(() => decimalsUntilInteger(1)).to.not.throw(TypeError);
            expect(() => decimalsUntilInteger("1")).to.throw(TypeError);
        });

        it("return the decimal count as well as the integer number", function() {
            expect(decimalsUntilInteger(1)).to.deep.equal([0, 1]);
            expect(decimalsUntilInteger(0.1)).to.deep.equal([1, 1]);
            expect(decimalsUntilInteger(0.01)).to.deep.equal([2, 1]);
            expect(decimalsUntilInteger(0.07)).to.deep.equal([2, 7]);
        });
    });
});
