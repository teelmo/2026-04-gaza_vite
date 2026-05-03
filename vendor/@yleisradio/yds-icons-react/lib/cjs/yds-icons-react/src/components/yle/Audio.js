"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Audio = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Audio = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M3 11.5a9 9 0 0 1 18 0v7c0 1.66-1.34 3-3 3h-3v-8h4v-2c0-3.87-3.13-7-7-7s-7 3.13-7 7v2h4v8H6c-1.66 0-3-1.34-3-3zm4 4v4H6c-.55 0-1-.45-1-1v-3zm12 0v3c0 .55-.45 1-1 1h-1v-4z", clipRule: "evenodd" })] })));
};
exports.Audio = Audio;
