"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fullscreen = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Fullscreen = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M2.879 2.879A3 3 0 0 1 5 2h3a1 1 0 0 1 0 2H5a1 1 0 0 0-1 1v3a1 1 0 0 1-2 0V5a3 3 0 0 1 .879-2.121M15 3a1 1 0 0 1 1-1h3a3 3 0 0 1 3 3v3a1 1 0 1 1-2 0V5a1 1 0 0 0-1-1h-3a1 1 0 0 1-1-1M3 15a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h3a1 1 0 1 1 0 2H5a3 3 0 0 1-3-3v-3a1 1 0 0 1 1-1m18 0a1 1 0 0 1 1 1v3a3 3 0 0 1-3 3h-3a1 1 0 1 1 0-2h3a1 1 0 0 0 1-1v-3a1 1 0 0 1 1-1", clipRule: "evenodd" })] })));
};
exports.Fullscreen = Fullscreen;
