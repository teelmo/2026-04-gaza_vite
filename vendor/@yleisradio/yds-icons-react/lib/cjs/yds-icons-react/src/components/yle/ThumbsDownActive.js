"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThumbsDownActive = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const ThumbsDownActive = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "m3.395 3.7-1.369 9a2.02 2.02 0 0 0 .353 1.5 2 2 0 0 0 1.304.8h5.945v4c0 .796.313 1.559.87 2.121A2.96 2.96 0 0 0 12.6 22l3.945-9V2H5.385a1.97 1.97 0 0 0-1.31.473 2 2 0 0 0-.68 1.227M18.364 2v10.91h1.85c.476-.006.93-.216 1.264-.588.334-.37.522-.872.522-1.395V3.982c0-.523-.188-1.024-.522-1.395A1.73 1.73 0 0 0 20.215 2z" })] })));
};
exports.ThumbsDownActive = ThumbsDownActive;
