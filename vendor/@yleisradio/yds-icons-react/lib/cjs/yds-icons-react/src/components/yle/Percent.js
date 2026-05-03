"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Percent = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Percent = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M6.5 3a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7M5 6.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m13.293-2.207a1 1 0 1 1 1.414 1.414l-14 14a1 1 0 0 1-1.414-1.414zM14 17.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0m3.5-1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3", clipRule: "evenodd" })] })));
};
exports.Percent = Percent;
