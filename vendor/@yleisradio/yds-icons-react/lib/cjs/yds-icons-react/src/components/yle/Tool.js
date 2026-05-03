"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tool = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Tool = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M16.558 3.028a5 5 0 0 0-5.117 7.03 1 1 0 0 1-.204 1.12l-6.91 6.91a1.121 1.121 0 0 0 1.586 1.585l6.91-6.91a1 1 0 0 1 1.12-.204 5 5 0 0 0 7.029-5.117L18.4 10.014a2 2 0 0 1-2.8 0l-.007-.007L13.986 8.4a2 2 0 0 1 0-2.8l.007-.007zM14.742 1.11a7 7 0 0 1 4.14.509 1 1 0 0 1 .295 1.618L15.414 7 17 8.586l3.763-3.763a1 1 0 0 1 1.618.295 7 7 0 0 1-8.606 9.521l-6.448 6.448a3.122 3.122 0 0 1-4.414-4.414l6.448-6.448a7 7 0 0 1 5.38-9.115Z", clipRule: "evenodd" })] })));
};
exports.Tool = Tool;
