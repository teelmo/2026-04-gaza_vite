"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckCircle = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const CheckCircle = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "M10.017 3.216a9 9 0 0 1 5.646.558 1 1 0 1 0 .814-1.827A11 11 0 1 0 23 12v-.92a1 1 0 1 0-2 0V12a9 9 0 1 1-10.983-8.784m12.69 1.49a1 1 0 0 0-1.415-1.413L12 12.595l-2.293-2.292a1 1 0 1 0-1.414 1.414l3 3a1 1 0 0 0 1.415 0l10-10.01Z" })] })));
};
exports.CheckCircle = CheckCircle;
