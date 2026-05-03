"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrowUp = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const ArrowUp = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "M12.707 4.293a1 1 0 0 0-1.414 0l-7 7a1 1 0 1 0 1.414 1.414L11 7.414v11.648c0 .518.448.938 1 .938s1-.42 1-.937V7.414l5.293 5.293a1 1 0 0 0 1.414-1.414z" })] })));
};
exports.ArrowUp = ArrowUp;
