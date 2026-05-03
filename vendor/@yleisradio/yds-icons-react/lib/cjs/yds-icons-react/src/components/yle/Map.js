"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Map = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Map = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M8.465 1.115a1 1 0 0 0-.976.025L.504 5.132A1 1 0 0 0 0 6v16a1 1 0 0 0 1.496.868l6.535-3.734 7.504 3.751a1 1 0 0 0 .976-.026l6.985-3.99A1 1 0 0 0 24 18V2a1 1 0 0 0-1.496-.868l-6.536 3.734zM7 3.723 2 6.58v13.697l5-2.857zm2 13.659V3.618l6 3v13.764zm13 .038-5 2.857V6.58l5-2.857z", clipRule: "evenodd" })] })));
};
exports.Map = Map;
