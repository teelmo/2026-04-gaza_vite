"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Anchor = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Anchor = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M13 8.874A4.002 4.002 0 0 0 12 1a4 4 0 0 0-1 7.874v12.07A9 9 0 0 1 3.056 13H5a1 1 0 1 0 0-2H2a1 1 0 0 0-1 1 11 11 0 1 0 22 0 1 1 0 0 0-1-1h-3a1 1 0 1 0 0 2h1.944A9 9 0 0 1 13 20.944zM10 5a2 2 0 1 1 4 0 2 2 0 0 1-4 0", clipRule: "evenodd" })] })));
};
exports.Anchor = Anchor;
