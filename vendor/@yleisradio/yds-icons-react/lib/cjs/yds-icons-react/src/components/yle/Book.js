"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Book = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M21 2a1 1 0 0 0-1-1H6.5A3.5 3.5 0 0 0 3 4.5v15A3.5 3.5 0 0 0 6.5 23H20a1 1 0 0 0 1-1zM5.44 3.44A1.5 1.5 0 0 1 6.5 3H19v13H6.5a3.5 3.5 0 0 0-1.5.338V4.5c0-.398.158-.78.44-1.06M5 19.5A1.5 1.5 0 0 0 6.5 21H19v-3H6.5A1.5 1.5 0 0 0 5 19.5", clipRule: "evenodd" })] })));
};
exports.Book = Book;
