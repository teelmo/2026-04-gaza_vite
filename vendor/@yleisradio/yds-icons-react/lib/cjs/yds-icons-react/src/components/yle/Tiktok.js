"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tiktok = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Tiktok = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "M20.5 10.085a5.29 5.29 0 0 1-4.928-2.396v8.228c0 3.359-2.703 6.083-6.036 6.083S3.5 19.287 3.5 15.928s2.703-6.083 6.036-6.083c.13 0 .25.01.369.022v2.997c-.12-.01-.25-.033-.37-.033-1.704 0-3.082 1.39-3.082 3.108s1.378 3.107 3.083 3.107c1.704 0 3.202-1.357 3.202-3.063L12.771 2h2.844c.271 2.571 2.323 4.584 4.885 4.77v3.337" })] })));
};
exports.Tiktok = Tiktok;
