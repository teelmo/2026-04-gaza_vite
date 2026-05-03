"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Box = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Box = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M10.502 1.403a3 3 0 0 1 2.996 0h.002l7 4a3 3 0 0 1 .937.85 1 1 0 0 1 .249.413A3 3 0 0 1 22 7.999V16a3 3 0 0 1-1.5 2.595l-.004.002-6.996 3.998-.002.001a3 3 0 0 1-1.022.363 1 1 0 0 1-.952 0 3 3 0 0 1-1.022-.363l-.002-.001-6.996-3.998-.004-.002A3 3 0 0 1 2 16V7.999a3 3 0 0 1 .314-1.333 1 1 0 0 1 .25-.414 3 3 0 0 1 .936-.848l.004-.002 6.998-4ZM13 20.578l6.5-3.714.002-.001a1 1 0 0 0 .498-.864V8.537l-7 4.05zm-2-7.991v7.991l-6.5-3.714-.002-.001A1 1 0 0 1 4 15.999V8.537zm1.5-9.451 6.461 3.692L12 10.855 5.039 6.828l6.457-3.69.004-.002a1 1 0 0 1 1 0", clipRule: "evenodd" })] })));
};
exports.Box = Box;
