"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pocket = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Pocket = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M20 2H4a3 3 0 0 0-3 3v6a11 11 0 1 0 22 0V5a3 3 0 0 0-3-3M3.293 4.293A1 1 0 0 1 4 4h16a1 1 0 0 1 1 1v6a9 9 0 0 1-18 0V5a1 1 0 0 1 .293-.707m5.414 5a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L12 12.586z", clipRule: "evenodd" })] })));
};
exports.Pocket = Pocket;
