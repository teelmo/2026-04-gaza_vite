"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaylistPlus = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const PlaylistPlus = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "M2 5a1 1 0 0 1 1-1h15a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1M18.05 8.7a1 1 0 0 1 1 1v3.85h3.85a1 1 0 1 1 0 2h-3.85v3.85a1 1 0 1 1-2 0v-3.85H13.2a1 1 0 1 1 0-2h3.85V9.7a1 1 0 0 1 1-1M3 10.5a1 1 0 1 0 0 2h5.2a1 1 0 1 0 0-2zM3 17a1 1 0 1 0 0 2h5.2a1 1 0 1 0 0-2z" })] })));
};
exports.PlaylistPlus = PlaylistPlus;
