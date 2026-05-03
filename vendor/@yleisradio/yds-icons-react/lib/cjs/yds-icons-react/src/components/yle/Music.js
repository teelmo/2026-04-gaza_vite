"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Music = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Music = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M21.646 2.237A1 1 0 0 1 22 3v13a4 4 0 1 1-2-3.465V4.18L10 5.847v12.156a4 4 0 1 1-2-3.468V5a1 1 0 0 1 .836-.986l12-2a1 1 0 0 1 .81.223M20 16a2 2 0 1 0-4 0 2 2 0 0 0 4 0M6 16a2 2 0 1 1 0 4 2 2 0 0 1 0-4", clipRule: "evenodd" })] })));
};
exports.Music = Music;
