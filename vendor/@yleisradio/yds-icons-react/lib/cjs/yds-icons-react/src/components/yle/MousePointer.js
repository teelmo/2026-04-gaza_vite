"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MousePointer = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const MousePointer = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M3.385 2.077a1 1 0 0 0-1.308 1.308l7.07 16.97a1 1 0 0 0 1.87-.063l1.993-5.868 5.283 5.283a1 1 0 0 0 1.414-1.414l-5.283-5.283 5.868-1.993a1 1 0 0 0 .063-1.87zm6.59 15.064L4.857 4.857l12.284 5.118-4.883 1.658a1 1 0 0 0-.625.625z", clipRule: "evenodd" })] })));
};
exports.MousePointer = MousePointer;
