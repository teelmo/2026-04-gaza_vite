"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icon4k = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Icon4k = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3zm16.737 3.824a1 1 0 0 1-.061 1.413L16.48 12.25l2.196 2.013a1 1 0 0 1-1.352 1.474L15 13.607V15a1 1 0 1 1-2 0V9.5a1 1 0 1 1 2 0v1.393l2.324-2.13a1 1 0 0 1 1.413.061M6 8.5a1 1 0 0 1 1 1v2h1.5v-2a1 1 0 0 1 2 0v2a1 1 0 1 1 0 2V15a1 1 0 1 1-2 0v-1.5H5v-4a1 1 0 0 1 1-1", clipRule: "evenodd" })] })));
};
exports.Icon4k = Icon4k;
