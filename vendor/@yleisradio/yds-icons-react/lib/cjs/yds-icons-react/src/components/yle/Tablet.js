"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tablet = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Tablet = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "M13.26 18c0-.69-.56-1.25-1.25-1.25H12a1.25 1.25 0 0 0 0 2.5h.01c.69 0 1.25-.56 1.25-1.25M21 4c0-1.66-1.34-3-3-3H6C4.34 1 3 2.34 3 4v16c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3zm-2 16c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h12c.55 0 1 .45 1 1z" })] })));
};
exports.Tablet = Tablet;
