"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Navigation = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Navigation = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M22.707 1.293a1 1 0 0 1 .197 1.135l-9 19a1 1 0 0 1-1.874-.186l-1.855-7.417-7.418-1.855a1 1 0 0 1-.185-1.874l19-9a1 1 0 0 1 1.135.197M5.953 10.708l5.29 1.322a1 1 0 0 1 .727.728l1.322 5.289 6.606-13.945z", clipRule: "evenodd" })] })));
};
exports.Navigation = Navigation;
