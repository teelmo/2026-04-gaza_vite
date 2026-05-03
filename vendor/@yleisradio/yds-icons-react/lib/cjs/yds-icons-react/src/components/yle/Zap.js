"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Zap = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Zap = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M13.398 1.083a1 1 0 0 1 .594 1.041L13.132 9H21a1 1 0 0 1 .768 1.64l-10 12a1 1 0 0 1-1.76-.764l.86-6.876H3a1 1 0 0 1-.768-1.64l10-12a1 1 0 0 1 1.166-.277M5.135 13H12a1 1 0 0 1 .992 1.124l-.577 4.616 6.45-7.74H12a1 1 0 0 1-.992-1.124l.577-4.615z", clipRule: "evenodd" })] })));
};
exports.Zap = Zap;
