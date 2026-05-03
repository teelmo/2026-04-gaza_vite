"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Instagram = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Instagram = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "M17.3 5.57a1.18 1.18 0 0 0 0 2.36c.64 0 1.18-.53 1.18-1.18s-.53-1.18-1.18-1.18M12.08 7.08c-2.72 0-4.92 2.21-4.92 4.92a4.93 4.93 0 0 0 4.92 4.92A4.93 4.93 0 0 0 17 12a4.93 4.93 0 0 0-4.92-4.92m0 8.09a3.15 3.15 0 1 1 0-6.3 3.15 3.15 0 0 1 0 6.3M2 8.01C2 4.7 4.7 2 8.01 2h7.98C19.3 2 22 4.7 22 8.01v7.98C22 19.3 19.3 22 15.99 22H8.01C4.7 22 2 19.3 2 15.99zm13.99 12.11c2.27 0 4.13-1.85 4.13-4.13V8.01c0-2.27-1.85-4.13-4.13-4.13H8.01c-2.28 0-4.13 1.85-4.13 4.13v7.98c0 2.27 1.85 4.13 4.13 4.13z" })] })));
};
exports.Instagram = Instagram;
