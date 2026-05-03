"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortAsc = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const SortAsc = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "M11.583 5.632a.5.5 0 0 1 .834 0l2.536 3.843a.5.5 0 0 1-.418.775h-5.07a.5.5 0 0 1-.417-.775z" })] })));
};
exports.SortAsc = SortAsc;
