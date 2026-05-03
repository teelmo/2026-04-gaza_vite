"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bold = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Bold = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M6 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h9a5 5 0 0 0 2.435-9.367A5 5 0 0 0 14 3zm8 8a3 3 0 0 0 0-6H7v6zm-7 2v6h8a3 3 0 0 0 0-6z", clipRule: "evenodd" })] })));
};
exports.Bold = Bold;
