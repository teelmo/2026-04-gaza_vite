"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Video = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Video = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "M15 8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1zm2 3.073v1.392l4 2.667V8.74zm0-2.314 3.744-2.185.176-.088a1.5 1.5 0 0 1 .575-.116l.196.012q.196.025.38.1l.176.087.164.11q.156.12.277.276l.11.163.088.177A1.5 1.5 0 0 1 23 7.87v8.196l-.014.203a1.5 1.5 0 0 1-2.317 1.046h-.001L17 14.868V16a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3z" })] })));
};
exports.Video = Video;
