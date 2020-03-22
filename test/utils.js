"use strict";

import "mocha";
import Expect from "chai";

import { decimalsUntilInteger } from "../src/utils.js";

describe("utils", function() {
    describe("decimalsUntilInteger", function() {
        it("should throw an error if providing an incorrect amount of arguments", function() {
            Expect.expect(() => decimalsUntilInteger(1)).to.not.throw(Error);
            Expect.expect(() => decimalsUntilInteger()).to.throw(Error);
            Expect.expect(() => decimalsUntilInteger(1, 2)).to.throw(Error);
        });

        it("should throw an error if the first argument is not a number", function() {
            Expect.expect(() => decimalsUntilInteger(1)).to.not.throw(TypeError);
            Expect.expect(() => decimalsUntilInteger("1")).to.throw(TypeError);
        });

        it("return the decimal count as well as the integer number", function() {
            Expect.expect(decimalsUntilInteger(1)).to.deep.equal([0, 1]);
            Expect.expect(decimalsUntilInteger(0.1)).to.deep.equal([1, 1]);
            Expect.expect(decimalsUntilInteger(0.01)).to.deep.equal([2, 1]);
            Expect.expect(decimalsUntilInteger(0.07)).to.deep.equal([2, 7]);
        });
    });
});
