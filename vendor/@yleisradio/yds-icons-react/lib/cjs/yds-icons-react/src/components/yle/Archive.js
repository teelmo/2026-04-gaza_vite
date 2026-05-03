"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Archive = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Archive = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "M21 2a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2v10a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V9a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zM5 19a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9H5zm9-8a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2zM3 7h18V4H3z" })] })));
};
exports.Archive = Archive;
