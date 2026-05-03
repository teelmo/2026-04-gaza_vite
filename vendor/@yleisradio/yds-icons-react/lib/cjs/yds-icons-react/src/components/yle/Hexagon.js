"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hexagon = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Hexagon = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M10.502 1.403a3 3 0 0 1 2.998.001l7 4A3 3 0 0 1 22 7.999v8.002a3 3 0 0 1-1.5 2.595l-.004.002-6.996 3.998-.002.001a3 3 0 0 1-2.996 0l-.002-.001-6.996-3.998-.004-.002A3 3 0 0 1 2 16.001V7.999a3 3 0 0 1 1.5-2.595l.004-.002 6.998-4ZM12 3.002a1 1 0 0 0-.5.134l-.004.002L4.5 7.136h-.002A1 1 0 0 0 4 8.002V16a1 1 0 0 0 .498.864l.002.001 7 4a1 1 0 0 0 1 0l.004-.002 6.996-3.998h.002A1 1 0 0 0 20 16V8.001a1 1 0 0 0-.498-.864l-.002-.001-7-4a1 1 0 0 0-.5-.134", clipRule: "evenodd" })] })));
};
exports.Hexagon = Hexagon;
