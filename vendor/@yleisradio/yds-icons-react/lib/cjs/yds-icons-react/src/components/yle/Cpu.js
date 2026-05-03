"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cpu = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Cpu = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "M9 8a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1zm1 6v-4h4v4zM9 0a1 1 0 0 1 1 1v2h4V1a1 1 0 1 1 2 0v2h2a3 3 0 0 1 3 3v2h2a1 1 0 1 1 0 2h-2v3h2a1 1 0 1 1 0 2h-2v3a3 3 0 0 1-3 3h-2v2a1 1 0 1 1-2 0v-2h-4v2a1 1 0 1 1-2 0v-2H6a3 3 0 0 1-3-3v-3H1a1 1 0 1 1 0-2h2v-3H1a1 1 0 1 1 0-2h2V6a3 3 0 0 1 3-3h2V1a1 1 0 0 1 1-1M5 18a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1z" })] })));
};
exports.Cpu = Cpu;
