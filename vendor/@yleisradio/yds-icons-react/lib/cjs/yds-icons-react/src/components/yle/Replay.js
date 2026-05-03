"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Replay = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Replay = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "M16.837 3.248A10 10 0 0 0 4.944 4.912L2 7.679V3.99a1 1 0 1 0-2 0v6a1 1 0 0 0 1 1h6a1 1 0 1 0 0-2H3.525l2.8-2.632.022-.02a8 8 0 1 1-1.894 8.32 1 1 0 0 0-1.886.664 10 10 0 1 0 14.27-12.075" })] })));
};
exports.Replay = Replay;
