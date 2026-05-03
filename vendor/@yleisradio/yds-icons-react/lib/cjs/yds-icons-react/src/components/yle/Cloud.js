"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cloud = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Cloud = (_a) => {
    var { title = undefined, titleId = undefined, width = '25', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 25 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "M6.87 3.56A9 9 0 0 0 10 21h9a6 6 0 0 0 4.243-10.243l-.203-.193A6 6 0 0 0 19 9h-.522l-.075-.209A9 9 0 0 0 7.21 3.441zm4.535 1.584a7 7 0 0 1 5.367 5.106 1 1 0 0 0 .968.75H19a4 4 0 1 1 0 8h-9a7.001 7.001 0 1 1 1.405-13.856" })] })));
};
exports.Cloud = Cloud;
