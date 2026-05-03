"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paperclip = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Paperclip = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M15.78 2.388a3 3 0 0 0-2.123.88l-9.19 9.19a5.003 5.003 0 1 0 7.076 7.075l9.19-9.19a1 1 0 0 1 1.414 1.414l-9.19 9.19a7.003 7.003 0 0 1-9.904-9.904l9.19-9.19a5.002 5.002 0 0 1 7.074 7.074l-9.2 9.19a3.001 3.001 0 0 1-4.244-4.244l8.49-8.48a1 1 0 1 1 1.414 1.415l-8.49 8.48a1.003 1.003 0 0 0 .708 1.708 1 1 0 0 0 .708-.293l9.2-9.19a3.004 3.004 0 0 0-2.123-5.125", clipRule: "evenodd" })] })));
};
exports.Paperclip = Paperclip;
