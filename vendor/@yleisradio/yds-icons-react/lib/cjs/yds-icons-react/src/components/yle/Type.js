"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Type = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Type = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V5h-6v14h2a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h2V5H5v2a1 1 0 0 1-2 0z" })] })));
};
exports.Type = Type;
