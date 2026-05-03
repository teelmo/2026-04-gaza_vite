"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetQuote = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const AssetQuote = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '16', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 16", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "M0 16h7.166l4.327-16H2.231zM24 0h-9.262l-2.231 16h7.166z" })] })));
};
exports.AssetQuote = AssetQuote;
