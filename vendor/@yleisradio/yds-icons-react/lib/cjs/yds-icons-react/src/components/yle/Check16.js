"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Check16 = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Check16 = (_a) => {
    var { title = undefined, titleId = undefined, width = '16', height = '16', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 16 16", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M14.5 3.293a1 1 0 0 1 0 1.414L7.207 12a1 1 0 0 1-1.414 0l-4.5-4.5a1 1 0 0 1 1.414-1.414L6.5 9.879l6.586-6.586a1 1 0 0 1 1.414 0", clipRule: "evenodd" })] })));
};
exports.Check16 = Check16;
