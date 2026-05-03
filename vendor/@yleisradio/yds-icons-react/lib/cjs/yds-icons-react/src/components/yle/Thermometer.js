"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Thermometer = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Thermometer = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '25', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 25", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M9.025 1.025A3.5 3.5 0 0 1 15 3.5v10.759a5.5 5.5 0 1 1-7 0V3.5a3.5 3.5 0 0 1 1.025-2.475M11.5 2A1.5 1.5 0 0 0 10 3.5v11.26a1 1 0 0 1-.444.832 3.5 3.5 0 1 0 3.888 0A1 1 0 0 1 13 14.76V3.5A1.5 1.5 0 0 0 11.5 2", clipRule: "evenodd" })] })));
};
exports.Thermometer = Thermometer;
