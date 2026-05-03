"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Duration = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Duration = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M6 3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v5h-.01l.01.01L14 12l4 4-.01.01H18V21a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-5l4-4-4-3.99.01-.01H6zm10 17v-3.5l-4-4-4 4V20zM8 7.5V4h8v3.5l-4 4z", clipRule: "evenodd" })] })));
};
exports.Duration = Duration;
