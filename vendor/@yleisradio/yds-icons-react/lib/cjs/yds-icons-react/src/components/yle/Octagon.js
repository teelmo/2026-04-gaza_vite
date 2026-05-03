"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Octagon = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Octagon = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M7.153 1.293A1 1 0 0 1 7.86 1h8.28a1 1 0 0 1 .707.293l5.86 5.86A1 1 0 0 1 23 7.86v8.28a1 1 0 0 1-.293.707l-5.86 5.86a1 1 0 0 1-.707.293H7.86a1 1 0 0 1-.707-.293l-5.86-5.86A1 1 0 0 1 1 16.14V7.86a1 1 0 0 1 .293-.707zM8.274 3 3 8.274v7.452L8.274 21h7.452L21 15.726V8.274L15.726 3z", clipRule: "evenodd" })] })));
};
exports.Octagon = Octagon;
