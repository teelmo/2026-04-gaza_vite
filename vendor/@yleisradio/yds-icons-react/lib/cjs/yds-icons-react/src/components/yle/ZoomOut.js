"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZoomOut = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const ZoomOut = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M11 20a8.96 8.96 0 0 0 5.618-1.968l3.675 3.675a1 1 0 1 0 1.414-1.414l-3.675-3.675A9 9 0 1 0 11 20m0-16a7 7 0 1 0 4.857 12.041 1 1 0 0 1 .184-.184A7 7 0 0 0 11 4m-3 6a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2z", clipRule: "evenodd" })] })));
};
exports.ZoomOut = ZoomOut;
