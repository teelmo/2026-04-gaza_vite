"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Figma = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Figma = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M5.672 16A4.5 4.5 0 1 0 13 19.5v-3.258a4.5 4.5 0 0 0 2.5.758 4.501 4.501 0 0 0 2.828-8A4.5 4.5 0 0 0 20 5.5 4.5 4.5 0 0 0 15.5 1h-7a4.5 4.5 0 0 0-2.828 8 4.502 4.502 0 0 0 0 7M8.5 3a2.5 2.5 0 1 0 0 5H11V3zM11 17H8.5a2.5 2.5 0 1 0 2.5 2.5zm-2.5-7a2.5 2.5 0 0 0 0 5H11v-5zm4.5 2.5a2.5 2.5 0 1 0 5.001 0 2.5 2.5 0 0 0-5.001 0M15.5 8a2.5 2.5 0 1 0 0-5H13v5z", clipRule: "evenodd" })] })));
};
exports.Figma = Figma;
