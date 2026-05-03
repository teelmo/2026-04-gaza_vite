"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Facebook = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Facebook = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "m16.779 13.401.572-3.67h-3.57V7.354c0-1.007.5-1.979 2.092-1.979h1.618V2.252S16.023 2 14.616 2c-2.928 0-4.854 1.753-4.854 4.937v2.794H6.5v3.67h3.262V22h4.019v-8.599z" })] })));
};
exports.Facebook = Facebook;
