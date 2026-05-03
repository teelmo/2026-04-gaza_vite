"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Autoplay = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Autoplay = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M6.623 2.375a10.8 10.8 0 0 1 6.798-1.268 10.86 10.86 0 0 1 6.174 3.1L21 5.543V3a1 1 0 1 1 2 0v5a1 1 0 0 1-1 1h-5a1 1 0 1 1 0-2h2.631l-1.424-1.352-.021-.02a8.86 8.86 0 0 0-5.047-2.54A8.8 8.8 0 0 0 7.6 4.12a8.96 8.96 0 0 0-3.82 4.197A9.1 9.1 0 0 0 3.222 14a9 9 0 0 0 2.933 4.875 8.83 8.83 0 0 0 10.674.621c1.655-1.113 3.728-3.014 4.179-6.619a1 1 0 1 1 1.984.248c-.55 4.395-3.129 6.74-5.047 8.03a10.83 10.83 0 0 1-6.671 1.828 10.85 10.85 0 0 1-6.418-2.588 11 11 0 0 1-3.585-5.955 11.1 11.1 0 0 1 .68-6.931 10.96 10.96 0 0 1 4.672-5.133m2.905 4.743a1 1 0 0 1 1.027.05l6 4a1 1 0 0 1 0 1.664l-6 4A1 1 0 0 1 9 16V8a1 1 0 0 1 .528-.882M11 9.868v4.264L14.197 12z", clipRule: "evenodd" })] })));
};
exports.Autoplay = Autoplay;
