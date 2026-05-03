"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinearScale = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const LinearScale = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "M6.732 13a2 2 0 1 1 0-2h3.536a2 2 0 0 1 3.464 0h3.536A2 2 0 0 1 21 12a2 2 0 0 1-3.732 1h-3.536a2 2 0 0 1-3.464 0z" })] })));
};
exports.LinearScale = LinearScale;
