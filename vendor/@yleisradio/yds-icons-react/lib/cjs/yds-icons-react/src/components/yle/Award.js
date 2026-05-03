"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Award = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Award = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M7.14 14.355a8 8 0 1 1 9.722 0l1.13 8.514a1 1 0 0 1-1.507.989L12 21.166l-4.485 2.692a1 1 0 0 1-1.506-.99l1.13-8.513ZM6 8a6 6 0 1 1 9.33 4.992q-.084.044-.16.103A6 6 0 0 1 6 8m8.986 7.424A8 8 0 0 1 12 16a8 8 0 0 1-2.985-.575l-.75 5.65 3.22-1.933a1 1 0 0 1 1.03 0l3.22 1.933-.749-5.65Z", clipRule: "evenodd" })] })));
};
exports.Award = Award;
