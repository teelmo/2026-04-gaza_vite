"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Italic = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Italic = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "M15.022 3H19a1 1 0 1 1 0 2h-3.307l-5.25 14H14a1 1 0 1 1 0 2H5a1 1 0 1 1 0-2h3.307l5.25-14H10a1 1 0 0 1 0-2z" })] })));
};
exports.Italic = Italic;
