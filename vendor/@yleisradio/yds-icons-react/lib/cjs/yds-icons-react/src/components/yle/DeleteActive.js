"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteActive = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const DeleteActive = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M8 3a1 1 0 0 0-.753.341l-7 8a1 1 0 0 0 0 1.318l7 8A1 1 0 0 0 8 21h13a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm10.707 5.293a1 1 0 0 1 0 1.414L16.414 12l2.293 2.293a1 1 0 0 1-1.414 1.414L15 13.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L13.586 12l-2.293-2.293a1 1 0 0 1 1.414-1.414L15 10.586l2.293-2.293a1 1 0 0 1 1.414 0", clipRule: "evenodd" })] })));
};
exports.DeleteActive = DeleteActive;
