"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CapsLock = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const CapsLock = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M8 19a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1M11.293 4.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 19 13h-3v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2H5a1 1 0 0 1-.707-1.707zM7.414 11H9a1 1 0 0 1 1 1v2h4v-2a1 1 0 0 1 1-1h1.586L12 6.414z", clipRule: "evenodd" })] })));
};
exports.CapsLock = CapsLock;
