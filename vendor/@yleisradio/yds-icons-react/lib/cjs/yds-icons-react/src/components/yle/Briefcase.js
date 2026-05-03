"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Briefcase = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Briefcase = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M10 2a3 3 0 0 0-3 3v1H4a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-3V5a3 3 0 0 0-3-3zm5 4V5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1zM9 8h6v12H9zM7 8H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3zm10 12V8h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1z", clipRule: "evenodd" })] })));
};
exports.Briefcase = Briefcase;
