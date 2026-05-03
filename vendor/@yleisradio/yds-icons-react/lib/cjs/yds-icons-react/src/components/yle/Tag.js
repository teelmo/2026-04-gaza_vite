"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tag = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Tag = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M2 1a1 1 0 0 0-1 1v10a1 1 0 0 0 .293.707l8.59 8.58a3 3 0 0 0 4.245 0l7.17-7.17-.708-.707.71.705a3 3 0 0 0 0-4.23l-8.593-8.592A1 1 0 0 0 12 1zm17.882 11.704-.001.001-7.168 7.168a1 1 0 0 1-1.415 0h-.001L3 11.584V3h8.586l8.295 8.295a1 1 0 0 1 0 1.41ZM7 6a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2z", clipRule: "evenodd" })] })));
};
exports.Tag = Tag;
