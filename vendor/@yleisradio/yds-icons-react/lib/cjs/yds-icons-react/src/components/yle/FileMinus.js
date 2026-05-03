"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileMinus = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const FileMinus = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M3.879 1.879A3 3 0 0 1 6 1h8a1 1 0 0 1 .707.293l6 6A1 1 0 0 1 21 8v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V4a3 3 0 0 1 .879-2.121M6 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9h-5a1 1 0 0 1-1-1V3zm9 1.414L17.586 7H15zM9 14a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2z", clipRule: "evenodd" })] })));
};
exports.FileMinus = FileMinus;
