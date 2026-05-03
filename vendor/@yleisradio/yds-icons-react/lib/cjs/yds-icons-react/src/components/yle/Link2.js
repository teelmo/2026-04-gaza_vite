"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Link2 = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Link2 = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "M3.172 9.172A4 4 0 0 1 6 8h3a1 1 0 1 0 0-2H6a6 6 0 1 0 0 12h3a1 1 0 1 0 0-2H6a4 4 0 0 1-2.828-6.828M15 6a1 1 0 1 0 0 2h3a4 4 0 1 1 0 8h-3a1 1 0 1 0 0 2h3a6 6 0 0 0 0-12zm-7 5a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2z" })] })));
};
exports.Link2 = Link2;
