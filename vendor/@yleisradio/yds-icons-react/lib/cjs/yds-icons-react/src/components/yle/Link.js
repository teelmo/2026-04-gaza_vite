"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Link = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Link = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "M16.996 1.067a6 6 0 0 0-4.22 1.684l-.011.01-1.72 1.71a1 1 0 0 0 1.41 1.418l1.715-1.705a4 4 0 0 1 5.656 5.655l-2.993 2.994a4.003 4.003 0 0 1-6.032-.432 1 1 0 1 0-1.602 1.198 6 6 0 0 0 9.048.648l3-3 .012-.012a6 6 0 0 0-4.263-10.168M10.425 8.01a6 6 0 0 0-4.672 1.743l-3 3-.012.012a6 6 0 0 0 8.484 8.484l.012-.012 1.71-1.71a1 1 0 0 0-1.414-1.414l-1.704 1.703a4 4 0 0 1-5.655-5.655l2.993-2.994a4 4 0 0 1 6.032.432 1 1 0 1 0 1.602-1.198 6 6 0 0 0-4.376-2.39" })] })));
};
exports.Link = Link;
