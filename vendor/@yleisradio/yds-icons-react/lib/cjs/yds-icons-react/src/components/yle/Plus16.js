"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Plus16 = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Plus16 = (_a) => {
    var { title = undefined, titleId = undefined, width = '16', height = '16', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 16 16", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { stroke: color, strokeLinecap: "round", strokeWidth: 2, d: "M3 8h10M8 3v10" })] })));
};
exports.Plus16 = Plus16;
