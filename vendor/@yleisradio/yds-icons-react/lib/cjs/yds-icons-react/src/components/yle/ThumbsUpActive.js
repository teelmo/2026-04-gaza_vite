"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThumbsUpActive = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const ThumbsUpActive = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "m20.605 20.3 1.37-9a2.02 2.02 0 0 0-.354-1.5 2 2 0 0 0-1.304-.8h-5.945V5c0-.796-.313-1.559-.87-2.121A2.96 2.96 0 0 0 11.4 2l-3.945 9v11h11.16c.479.007.945-.16 1.31-.473.367-.313.608-.749.68-1.227M5.636 22V11.09h-1.85c-.476.006-.93.216-1.264.588A2.1 2.1 0 0 0 2 13.073v6.945c0 .523.188 1.024.522 1.395s.788.582 1.263.587z" })] })));
};
exports.ThumbsUpActive = ThumbsUpActive;
