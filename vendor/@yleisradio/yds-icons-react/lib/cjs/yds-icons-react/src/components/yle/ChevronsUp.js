"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChevronsUp = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const ChevronsUp = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "M12.707 5.293a1 1 0 0 0-1.414 0l-5 5a1 1 0 1 0 1.414 1.414L12 7.414l4.293 4.293a1 1 0 0 0 1.414-1.414zm5 12-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 1 0 1.414 1.414L12 14.414l4.293 4.293a1 1 0 0 0 1.414-1.414" })] })));
};
exports.ChevronsUp = ChevronsUp;
