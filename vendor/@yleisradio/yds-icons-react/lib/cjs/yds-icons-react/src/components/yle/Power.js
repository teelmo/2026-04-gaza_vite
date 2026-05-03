"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Power = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Power = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "M13 2a1 1 0 1 0-2 0v10a1 1 0 1 0 2 0zM6.337 7.347a1 1 0 0 0-1.414-1.414 10 10 0 1 0 14.144 0 1 1 0 1 0-1.414 1.414 8 8 0 1 1-11.316 0" })] })));
};
exports.Power = Power;
