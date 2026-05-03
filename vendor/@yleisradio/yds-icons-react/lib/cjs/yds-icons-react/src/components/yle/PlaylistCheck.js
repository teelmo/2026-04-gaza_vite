"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaylistCheck = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const PlaylistCheck = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "M3 4a1 1 0 0 0 0 2h15a1 1 0 1 0 0-2zM3 10.5a1 1 0 1 0 0 2h5.2a1 1 0 1 0 0-2zM2 18a1 1 0 0 1 1-1h5.2a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1M23.727 10.563a1 1 0 1 0-1.653-1.126l-5.624 8.26-2.458-3.186a1 1 0 1 0-1.584 1.22l3.3 4.28a1 1 0 0 0 1.619-.048z" })] })));
};
exports.PlaylistCheck = PlaylistCheck;
