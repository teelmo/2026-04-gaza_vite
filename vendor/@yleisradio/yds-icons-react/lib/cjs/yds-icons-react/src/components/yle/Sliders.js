"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sliders = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Sliders = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "M21 3a1 1 0 1 0-2 0v9a1 1 0 1 0 2 0zM8 8a1 1 0 0 1 1-1h2V3a1 1 0 1 1 2 0v4h2a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1m5 4a1 1 0 1 0-2 0v9a1 1 0 1 0 2 0zM0 14a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H5v6a1 1 0 1 1-2 0v-6H1a1 1 0 0 1-1-1m16 2a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-2v4a1 1 0 1 1-2 0v-4h-2a1 1 0 0 1-1-1M5 3a1 1 0 0 0-2 0v7a1 1 0 1 0 2 0z" })] })));
};
exports.Sliders = Sliders;
