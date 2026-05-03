"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Accessibility = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Accessibility = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "M12.003 1a11 11 0 1 0 7.775 3.222A10.95 10.95 0 0 0 12.003 1m.07 13.277 1.602 4.426a.9.9 0 0 0 .462.506.894.894 0 0 0 1.22-1.117L14.24 15a5 5 0 0 1-.209-.716 7 7 0 0 1-.097-.748 32 32 0 0 1-.096-1.414 68 68 0 0 1-.052-1.305c-.016-.47.11-.501.488-.59l.08-.019 3.22-.606a.9.9 0 0 0 .579-.369.895.895 0 0 0-.904-1.385l-3.461.65c-.138.012-.273.028-.414.044q-.64.088-1.285.095a15 15 0 0 1-1.6-.12c-.161-.018-.313-.037-.465-.052l-3.267-.612a.9.9 0 0 0-.67.127.895.895 0 0 0-.234 1.253.9.9 0 0 0 .575.374l3.121.587q.156.034.28.052c.325.056.486.084.467.548a15 15 0 0 1-.11 1.165 31 31 0 0 1-.23 1.503 7 7 0 0 1-.18.815c-.07.243-.14.492-.248.79l-1.094 3.025a.895.895 0 1 0 1.683.61l1.607-4.416.179-.328.179.319zm-.07-9.58a1.58 1.58 0 1 0-.002 3.162 1.58 1.58 0 0 0 .002-3.161m-6.506.794a9.203 9.203 0 1 1 13.037 12.993A9.203 9.203 0 0 1 5.497 5.49" })] })));
};
exports.Accessibility = Accessibility;
