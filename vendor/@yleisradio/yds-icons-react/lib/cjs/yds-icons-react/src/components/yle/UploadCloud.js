"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadCloud = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const UploadCloud = (_a) => {
    var { title = undefined, titleId = undefined, width = '25', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 25 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "M8.669 2.009A9 9 0 0 1 17.484 8h.521a6.002 6.002 0 0 1 5.497 8.398 6 6 0 0 1-2.628 2.87 1 1 0 0 1-.957-1.756A4 4 0 0 0 18.005 10h-1.26a1 1 0 0 1-.968-.75 7 7 0 1 0-12.022 6.388 1 1 0 1 1-1.499 1.324A9 9 0 0 1 8.669 2.01Zm4.043 9.284a1 1 0 0 0-1.414 0l-4 4a1 1 0 1 0 1.414 1.414l2.293-2.293V21a1 1 0 1 0 2 0v-6.586l2.293 2.293a1 1 0 0 0 1.414-1.414z" })] })));
};
exports.UploadCloud = UploadCloud;
