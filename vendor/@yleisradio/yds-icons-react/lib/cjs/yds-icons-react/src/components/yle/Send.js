"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Send = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Send = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M1.336 2.05a1 1 0 0 1 1.1-.181l20.093 9.192a1 1 0 0 1 0 1.82L2.437 22.072a1 1 0 0 1-1.35-1.269l3.398-8.833-3.398-8.834a1 1 0 0 1 .249-1.087m4.907 10.92-2.409 6.264 13.69-6.263zm11.28-2H6.243l-2.409-6.26z", clipRule: "evenodd" })] })));
};
exports.Send = Send;
