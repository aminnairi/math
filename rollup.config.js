"use strict";

import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";

import { resolve } from "path";
import { terser } from "rollup-plugin-terser";
import { eslint } from "rollup-plugin-eslint";

export default [
    {
        input: resolve("src", "math.js"),
        plugins: [
            eslint(),
            commonjs(),
            nodeResolve(),
            terser()
        ],
        output: {
            file: resolve("lib", "math.common.js"),
            format: "cjs"
        }
    },
    {
        input: resolve("src", "math.js"),
        plugins: [
            eslint(),
            commonjs(),
            nodeResolve(),
            terser()
        ],
        output: {
            file: resolve("lib", "math.esm.js"),
            format: "esm"
        }
    },
    {
        input: resolve("src", "math.js"),
        plugins: [
            eslint(),
            commonjs(),
            nodeResolve(),
            terser()
        ],
        output: {
            file: resolve("lib", "math.browser.js"),
            format: "iife",
            name: "@aminnairi/math",
            extend: true
        }
    }
];
