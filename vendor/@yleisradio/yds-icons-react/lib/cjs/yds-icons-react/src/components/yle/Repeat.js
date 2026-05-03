"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repeat = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Repeat = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "M16.293.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L18.586 6H7a3 3 0 0 0-3 3v2a1 1 0 1 1-2 0V9a5 5 0 0 1 5-5h11.586l-2.293-2.293a1 1 0 0 1 0-1.414M21 12a1 1 0 0 0-1 1v2a3 3 0 0 1-3 3H5.414l2.293-2.293a1 1 0 1 0-1.414-1.414l-4 4a1 1 0 0 0 0 1.414l4 4a1 1 0 0 0 1.414-1.414L5.414 20H17a5 5 0 0 0 5-5v-2a1 1 0 0 0-1-1" })] })));
};
exports.Repeat = Repeat;
