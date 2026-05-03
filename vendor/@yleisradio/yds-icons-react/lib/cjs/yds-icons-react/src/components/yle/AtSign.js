"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AtSign = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const AtSign = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M14.5 1.289a11 11 0 1 0 4.188 19.445 1 1 0 0 0-1.216-1.588A9 9 0 1 1 21 12v1a2 2 0 1 1-4 0V8a1 1 0 0 0-2 0 5 5 0 1 0 .74 7.319A4 4 0 0 0 19 17a4 4 0 0 0 4-4v-1a11 11 0 0 0-8.5-10.711M9 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0", clipRule: "evenodd" })] })));
};
exports.AtSign = AtSign;
