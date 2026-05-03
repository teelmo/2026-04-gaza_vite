"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Next = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Next = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "m5.62 3.22 10 8h.01c.14.11.25.26.31.42.05.11.07.23.07.36a1 1 0 0 1-.38.78l-10 8A1.004 1.004 0 0 1 4 20V4c0-.38.22-.73.57-.9.34-.17.75-.12 1.05.12M18 5c0-.55.45-1 1-1s1 .45 1 1v14c0 .55-.45 1-1 1s-1-.45-1-1z" })] })));
};
exports.Next = Next;
