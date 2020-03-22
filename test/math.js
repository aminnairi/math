"use strict";

import "mocha";
import Expect from "chai";

import { add, divide, multiply, subtract } from "../src/math.js";

describe("math", function() {
    describe("add", function() {
        it("should throw if the function is called with more or less than two arguments", function() {
            Expect.expect(() => add(1, 2)).to.not.throw(Error);
            Expect.expect(() => add(1)).to.throw(Error);
            Expect.expect(() => add(1, 2, 3)).to.throw(Error);
        });

        it("should throw if the first argument is not a number", function() {
            Expect.expect(() => add(1, 2)).to.not.throw(TypeError);
            Expect.expect(() => add("1", 2)).to.throw(TypeError);
        });

        it("should throw if the second argument is not a number", function() {
            Expect.expect(() => add(1, 2)).to.not.throw(TypeError);
            Expect.expect(() => add(1, "2")).to.throw(TypeError);
        });

        it("should return the correct result", function() {
            Expect.expect(add(2, 4)).to.equal(6);
            Expect.expect(add(0.2, 4)).to.equal(4.2);
            Expect.expect(add(2, 0.4)).to.equal(2.4);
            Expect.expect(add(0.1, 0.2)).to.equal(0.3);
            Expect.expect(add(0.16, 0.07)).to.equal(0.23);
            Expect.expect(add(2323, 0.1)).to.equal(2323.1);
            Expect.expect(add(2323, 0.07)).to.equal(2323.07);
            Expect.expect(add(0.03, 0.8)).to.equal(0.83);
        });
    });

    describe("divide", function() {
        it("should throw if the function is called with more or less than two arguments", function() {
            Expect.expect(() => divide(1, 2)).to.not.throw(Error);
            Expect.expect(() => divide(1)).to.throw(Error);
            Expect.expect(() => divide(1, 2, 3)).to.throw(Error);
        });

        it("should throw if the first argument is not a number", function() {
            Expect.expect(() => divide(1, 2)).to.not.throw(TypeError);
            Expect.expect(() => divide("1", 2)).to.throw(TypeError);
        });

        it("should throw if the second argument is not a number", function() {
            Expect.expect(() => divide(1, 2)).to.not.throw(TypeError);
            Expect.expect(() => divide(1, "2")).to.throw(TypeError);
        });

        it("should return the correct result", function() {
            Expect.expect(divide(2, 4)).to.equal(0.5);
            Expect.expect(divide(0.2, 4)).to.equal(0.05);
            Expect.expect(divide(2, 0.4)).to.equal(5);
            Expect.expect(divide(0.1, 0.2)).to.equal(0.5);
            Expect.expect(divide(0.16, 0.04)).to.equal(4);
            Expect.expect(divide(2323, 0.1)).to.equal(23230);
            Expect.expect(divide(2323, 0.08)).to.equal(29037.5);
        });
    });

    describe("multiply", function() {
        it("should throw if the function is called with more or less than two arguments", function() {
            Expect.expect(() => multiply(1, 2)).to.not.throw(Error);
            Expect.expect(() => multiply(1)).to.throw(Error);
            Expect.expect(() => multiply(1, 2, 3)).to.throw(Error);
        });

        it("should throw if the first argument is not a number", function() {
            Expect.expect(() => multiply(1, 2)).to.not.throw(TypeError);
            Expect.expect(() => multiply("1", 2)).to.throw(TypeError);
        });

        it("should throw if the second argument is not a number", function() {
            Expect.expect(() => multiply(1, 2)).to.not.throw(TypeError);
            Expect.expect(() => multiply(1, "2")).to.throw(TypeError);
        });

        it("should return the correct result", function() {
            Expect.expect(multiply(2, 4)).to.equal(8);
            Expect.expect(multiply(0.2, 4)).to.equal(0.8);
            Expect.expect(multiply(2, 0.4)).to.equal(0.8);
            Expect.expect(multiply(0.1, 0.2)).to.equal(0.02);
            Expect.expect(multiply(0.16, 0.07)).to.equal(0.0112);
            Expect.expect(multiply(2323, 0.1)).to.equal(232.3);
            Expect.expect(multiply(2323, 0.07)).to.equal(162.61);
        });
    });

    describe("subtract", function() {
        it("should throw if the function is called with more or less than two arguments", function() {
            Expect.expect(() => subtract(1, 2)).to.not.throw(Error);
            Expect.expect(() => subtract(1)).to.throw(Error);
            Expect.expect(() => subtract(1, 2, 3)).to.throw(Error);
        });

        it("should throw if the first argument is not a number", function() {
            Expect.expect(() => subtract(1, 2)).to.not.throw(TypeError);
            Expect.expect(() => subtract("1", 2)).to.throw(TypeError);
        });

        it("should throw if the second argument is not a number", function() {
            Expect.expect(() => subtract(1, 2)).to.not.throw(TypeError);
            Expect.expect(() => subtract(1, "2")).to.throw(TypeError);
        });

        it("should return the correct result", function() {
            Expect.expect(subtract(2, 4)).to.equal(-2);
            Expect.expect(subtract(0.2, 4)).to.equal(-3.8);
            Expect.expect(subtract(2, 0.4)).to.equal(1.6);
            Expect.expect(subtract(0.1, 0.2)).to.equal(-0.1);
            Expect.expect(subtract(0.16, 0.07)).to.equal(0.09);
            Expect.expect(subtract(2323, 0.1)).to.equal(2322.9);
            Expect.expect(subtract(2323, 0.07)).to.equal(2322.93);
        });
    });
});
