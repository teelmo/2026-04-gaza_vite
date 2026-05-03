"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Printer = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Printer = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M6 1a1 1 0 0 0-1 1v6H4a3 3 0 0 0-3 3v5a3 3 0 0 0 3 3h1v3a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3h1a3 3 0 0 0 3-3v-5a3 3 0 0 0-3-3h-1V2a1 1 0 0 0-1-1zm11 7V3H7v5zm3 2a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-1v-3a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3H4a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1zm-3 5v6H7v-6z", clipRule: "evenodd" })] })));
};
exports.Printer = Printer;
