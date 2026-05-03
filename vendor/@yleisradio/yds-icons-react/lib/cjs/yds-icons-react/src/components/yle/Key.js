"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Key = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Key = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M21.707 1.293a1 1 0 0 1 0 1.414L20.414 4l2.293 2.293a1 1 0 0 1 0 1.414l-3.5 3.5a1 1 0 0 1-1.414 0L15.5 8.914l-2.746 2.747A6.5 6.5 0 0 1 2.9 20.09l-.007-.008a6.5 6.5 0 0 1 8.43-9.821l8.97-8.97a1 1 0 0 1 1.414 0ZM19 5.414 16.914 7.5 18.5 9.086 20.586 7zM4.328 18.69a4.5 4.5 0 0 1 6.394-6.333 4.5 4.5 0 1 1-6.394 6.333m0 0 .003.004h-.007v-.007z", clipRule: "evenodd" })] })));
};
exports.Key = Key;
