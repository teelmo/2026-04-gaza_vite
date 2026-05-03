"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Compass = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Compass = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "M17.189 8.076a1 1 0 0 0-1.265-1.265l-6.36 2.12a1 1 0 0 0-.633.633l-2.12 6.36a1 1 0 0 0 1.265 1.265l6.36-2.12a1 1 0 0 0 .633-.633zM9.34 14.66l1.33-3.988 3.988-1.33-1.33 3.989zM12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1M3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0" })] })));
};
exports.Compass = Compass;
