"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cast = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Cast = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "M3.293 5.293A1 1 0 0 1 4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-6a1 1 0 1 0 0 2h6a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H4a3 3 0 0 0-3 3v2a1 1 0 1 0 2 0V6a1 1 0 0 1 .293-.707M2.11 11.056a1 1 0 0 0-.22 1.988 8 8 0 0 1 7.066 7.066 1 1 0 0 0 1.988-.22 10 10 0 0 0-8.834-8.834m.09 4.064a1 1 0 1 0-.4 1.96 4 4 0 0 1 3.12 3.12 1 1 0 1 0 1.96-.4 6 6 0 0 0-4.68-4.68M2 19a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2z" })] })));
};
exports.Cast = Cast;
