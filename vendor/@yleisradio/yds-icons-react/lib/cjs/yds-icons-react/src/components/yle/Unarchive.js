"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Unarchive = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Unarchive = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "M21 2a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2v10a3 3 0 0 1-3 3h-2a1 1 0 0 1 0-2h2a1 1 0 0 0 1-1V9H5v10a1 1 0 0 0 1 1h2a1 1 0 0 1 0 2H6a3 3 0 0 1-3-3V9a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zM3 7h18V4H3zm9.02 4c.04 0 .08 0 .12.01l.06.01.03.01c.1.03.2.07.29.13l.03.01c.06.04.11.08.16.12l3 3a1.004 1.004 0 0 1-1.42 1.42L13 14.41V21a1 1 0 0 1-2 0v-6.59L9.71 15.7a1 1 0 0 1-1.42-1.41l3-3c.06-.06.13-.11.21-.16l.04-.02c.07-.03.13-.05.2-.07l.05-.01h.03A1 1 0 0 1 12 11z" })] })));
};
exports.Unarchive = Unarchive;
