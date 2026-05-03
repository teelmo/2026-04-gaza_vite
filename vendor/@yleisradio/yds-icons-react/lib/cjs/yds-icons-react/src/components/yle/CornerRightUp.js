"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CornerRightUp = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const CornerRightUp = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "M15.707 3.293a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L14 6.414V16a3 3 0 0 1-3 3H4a1 1 0 1 0 0 2h7a5 5 0 0 0 5-5V6.414l3.293 3.293a1 1 0 0 0 1.414-1.414z" })] })));
};
exports.CornerRightUp = CornerRightUp;
