"use strict";

const { describe, it } = require("mocha");
const { expect } = require("chai");
const { add, divide, multiply, subtract } = require("../src/math.js");

describe("math", function() {
    describe("add", function() {
        it("should throw if the function is called with more or less than two arguments", function() {
            expect(() => add(1, 2)).to.not.throw(Error);
            expect(() => add(1)).to.throw(Error);
            expect(() => add(1, 2, 3)).to.throw(Error);
        });

        it("should throw if the first argument is not a number", function() {
            expect(() => add(1, 2)).to.not.throw(TypeError);
            expect(() => add("1", 2)).to.throw(TypeError);
        });

        it("should throw if the second argument is not a number", function() {
            expect(() => add(1, 2)).to.not.throw(TypeError);
            expect(() => add(1, "2")).to.throw(TypeError);
        });

        it("should return the correct result", function() {
            expect(add(2, 4)).to.equal(6);
            expect(add(0.2, 4)).to.equal(4.2);
            expect(add(2, 0.4)).to.equal(2.4);
            expect(add(0.1, 0.2)).to.equal(0.3);
            expect(add(0.16, 0.07)).to.equal(0.23);
            expect(add(2323, 0.1)).to.equal(2323.1);
            expect(add(2323, 0.07)).to.equal(2323.07);
        });
    });

    describe("divide", function() {
        it("should throw if the function is called with more or less than two arguments", function() {
            expect(() => divide(1, 2)).to.not.throw(Error);
            expect(() => divide(1)).to.throw(Error);
            expect(() => divide(1, 2, 3)).to.throw(Error);
        });

        it("should throw if the first argument is not a number", function() {
            expect(() => divide(1, 2)).to.not.throw(TypeError);
            expect(() => divide("1", 2)).to.throw(TypeError);
        });

        it("should throw if the second argument is not a number", function() {
            expect(() => divide(1, 2)).to.not.throw(TypeError);
            expect(() => divide(1, "2")).to.throw(TypeError);
        });

        it("should return the correct result", function() {
            expect(divide(2, 4)).to.equal(0.5);
            expect(divide(0.2, 4)).to.equal(0.05);
            expect(divide(2, 0.4)).to.equal(5);
            expect(divide(0.1, 0.2)).to.equal(0.5);
            expect(divide(0.16, 0.04)).to.equal(4);
            expect(divide(2323, 0.1)).to.equal(23230);
            expect(divide(2323, 0.08)).to.equal(29037.5);
        });
    });

    describe("multiply", function() {
        it("should throw if the function is called with more or less than two arguments", function() {
            expect(() => multiply(1, 2)).to.not.throw(Error);
            expect(() => multiply(1)).to.throw(Error);
            expect(() => multiply(1, 2, 3)).to.throw(Error);
        });

        it("should throw if the first argument is not a number", function() {
            expect(() => multiply(1, 2)).to.not.throw(TypeError);
            expect(() => multiply("1", 2)).to.throw(TypeError);
        });

        it("should throw if the second argument is not a number", function() {
            expect(() => multiply(1, 2)).to.not.throw(TypeError);
            expect(() => multiply(1, "2")).to.throw(TypeError);
        });

        it("should return the correct result", function() {
            expect(multiply(2, 4)).to.equal(8);
            expect(multiply(0.2, 4)).to.equal(0.8);
            expect(multiply(2, 0.4)).to.equal(0.8);
            expect(multiply(0.1, 0.2)).to.equal(0.02);
            expect(multiply(0.16, 0.07)).to.equal(0.0112);
            expect(multiply(2323, 0.1)).to.equal(232.3);
            expect(multiply(2323, 0.07)).to.equal(162.61);
        });
    });

    describe("subtract", function() {
        it("should throw if the function is called with more or less than two arguments", function() {
            expect(() => subtract(1, 2)).to.not.throw(Error);
            expect(() => subtract(1)).to.throw(Error);
            expect(() => subtract(1, 2, 3)).to.throw(Error);
        });

        it("should throw if the first argument is not a number", function() {
            expect(() => subtract(1, 2)).to.not.throw(TypeError);
            expect(() => subtract("1", 2)).to.throw(TypeError);
        });

        it("should throw if the second argument is not a number", function() {
            expect(() => subtract(1, 2)).to.not.throw(TypeError);
            expect(() => subtract(1, "2")).to.throw(TypeError);
        });

        it("should return the correct result", function() {
            expect(subtract(2, 4)).to.equal(-2);
            expect(subtract(0.2, 4)).to.equal(-3.8);
            expect(subtract(2, 0.4)).to.equal(1.6);
            expect(subtract(0.1, 0.2)).to.equal(-0.1);
            expect(subtract(0.16, 0.07)).to.equal(0.09);
            expect(subtract(2323, 0.1)).to.equal(2322.9);
            expect(subtract(2323, 0.07)).to.equal(2322.93);
        });
    });
});
