"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LiveStreamingActive = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const LiveStreamingActive = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "M9 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0M5.637 4.223a1 1 0 0 1 0 1.414 9 9 0 0 0 0 12.726 1 1 0 1 1-1.414 1.414 11 11 0 0 1 0-15.554 1 1 0 0 1 1.414 0m12.726 0a1 1 0 0 1 1.414 0 11 11 0 0 1 0 15.554 1 1 0 0 1-1.414-1.414 9 9 0 0 0 0-12.726 1 1 0 0 1 0-1.414m-9.895 2.82a1 1 0 0 1-.001 1.415 5 5 0 0 0 0 7.075 1 1 0 1 1-1.414 1.415 7 7 0 0 1 0-9.905 1 1 0 0 1 1.415 0m7.065.01a1 1 0 0 1 1.414 0 7 7 0 0 1 0 9.905 1 1 0 0 1-1.414-1.415 5 5 0 0 0 0-7.075 1 1 0 0 1 0-1.415" })] })));
};
exports.LiveStreamingActive = LiveStreamingActive;
