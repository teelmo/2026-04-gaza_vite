"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Columns = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Columns = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M2.879 2.879A3 3 0 0 1 5 2h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 .879-2.121M13 20h6a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-6zM11 4v16H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z", clipRule: "evenodd" })] })));
};
exports.Columns = Columns;
