"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogOut = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const LogOut = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "M4.293 4.293A1 1 0 0 1 5 4h4a1 1 0 0 0 0-2H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h4a1 1 0 1 0 0-2H5a1 1 0 0 1-1-1V5a1 1 0 0 1 .293-.707m11 2a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414-1.414L18.586 13H8.857C8.384 13 8 12.552 8 12s.384-1 .857-1h9.729l-3.293-3.293a1 1 0 0 1 0-1.414" })] })));
};
exports.LogOut = LogOut;
