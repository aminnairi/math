var e=function(e){if(1!==arguments.length)throw new Error("expected exactly 1 argument");if("number"!=typeof e)throw new TypeError("expected first argument to be a number");const r=e.toString().split(".");let t=0;return void 0!==r[1]&&(t=r[1].length),[t,parseInt(r.join(""))]};function r(r,t){if(2!==arguments.length)throw new Error("expected exactly 2 arguments");if("number"!=typeof r)throw new TypeError("expected first argument to be a number");if("number"!=typeof t)throw new TypeError("expected second argument to be a number");const[n,o]=e(r),[u,p]=e(t);return n===u?(o+p)/10**n:r+t}function t(r,t){if(2!==arguments.length)throw new Error("expected exactly 2 arguments");if("number"!=typeof r)throw new TypeError("expected first argument to be a number");if("number"!=typeof t)throw new TypeError("expected second argument to be a number");const[n,o]=e(r),[u,p]=e(t);return o/p/10**(n-u)}function n(r,t){if(2!==arguments.length)throw new Error("expected exactly 2 arguments");if("number"!=typeof r)throw new TypeError("expected first argument to be a number");if("number"!=typeof t)throw new TypeError("expected second argument to be a number");const[n,o]=e(r),[u,p]=e(t);return o*p/10**(n+u)}function o(r,t){if(2!==arguments.length)throw new Error("expected exactly 2 arguments");if("number"!=typeof r)throw new TypeError("expected first argument to be a number");if("number"!=typeof t)throw new TypeError("expected second argument to be a number");const[n,o]=e(r),[u,p]=e(t);return n===u?(o-p)/10**n:r-t}export{r as add,t as divide,n as multiply,o as subtract};