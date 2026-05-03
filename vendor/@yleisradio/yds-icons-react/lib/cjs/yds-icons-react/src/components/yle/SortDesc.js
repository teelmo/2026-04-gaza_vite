"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortDesc = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const SortDesc = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "M12.417 18.368a.5.5 0 0 1-.834 0l-2.535-3.843a.5.5 0 0 1 .417-.775h5.07a.5.5 0 0 1 .418.775z" })] })));
};
exports.SortDesc = SortDesc;
