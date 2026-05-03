"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThumbsUp = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const ThumbsUp = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M10.086 1.594A1 1 0 0 1 11 1a4 4 0 0 1 4 4v3h4.655a3 3 0 0 1 2.994 3.45l-1.38 9A3 3 0 0 1 18.275 23H4a3 3 0 0 1-3-3v-7a3 3 0 0 1 3-3h2.35zM8 11.212l3.608-8.117A2 2 0 0 1 13 5v4a1 1 0 0 0 1 1h5.671a1 1 0 0 1 1 1.15l-1.38 9a1 1 0 0 1-1 .85H8zM6 21v-9H4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1z", clipRule: "evenodd" })] })));
};
exports.ThumbsUp = ThumbsUp;
