"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DollarSign = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const DollarSign = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M13 1a1 1 0 1 0-2 0v3H9.5a4.5 4.5 0 0 0 0 9H11v5H6a1 1 0 1 0 0 2h5v3a1 1 0 1 0 2 0v-3h1.5a4.5 4.5 0 1 0 0-9H13V6h4a1 1 0 1 0 0-2h-4zm-2 5H9.5a2.5 2.5 0 1 0 0 5H11zm2 7v5h1.5a2.5 2.5 0 0 0 0-5z", clipRule: "evenodd" })] })));
};
exports.DollarSign = DollarSign;
