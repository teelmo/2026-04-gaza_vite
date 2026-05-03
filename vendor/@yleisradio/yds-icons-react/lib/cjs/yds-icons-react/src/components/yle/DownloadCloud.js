"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DownloadCloud = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const DownloadCloud = (_a) => {
    var { title = undefined, titleId = undefined, width = '26', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 26 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "M13.627 2.756A9 9 0 0 0 3.251 16.953a1 1 0 1 0 1.498-1.326A7 7 0 1 1 16.77 9.248a1 1 0 0 0 .97.752H19a4 4 0 0 1 2.304 7.272 1 1 0 0 0 1.15 1.636A6 6 0 0 0 19 8h-.518a9 9 0 0 0-4.854-5.244ZM13 11c.552 0 1 .366 1 .818v6.768l2.293-2.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L12 18.586v-6.768c0-.452.448-.818 1-.818" })] })));
};
exports.DownloadCloud = DownloadCloud;
