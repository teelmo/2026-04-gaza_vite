"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CameraOff = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const CameraOff = (_a) => {
    var { title = undefined, titleId = undefined, width = '26', height = '25', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 26 25", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "M24.71 23.29a.996.996 0 1 1-1.41 1.41l-1.71-1.71H4c-.8 0-1.56-.32-2.12-.88S1 20.78 1 19.99V9c0-.8.32-1.56.88-2.12S3.21 6 4 6h.59l-3.3-3.29c-.39-.39-.39-1.03 0-1.42s1.03-.39 1.42 0l8.7 8.71.03.03 5.53 5.53.03.03 5.71 5.71 2 2zm-.59-16.41C23.56 6.32 22.79 6 22 6h-3.46l-1.7-2.55c-.19-.28-.5-.45-.83-.45h-6c-.55 0-1 .45-1 1s.45 1 1 1h5.46l1.7 2.55c.19.28.5.45.83.45h4c.27 0 .52.11.71.29.19.19.29.44.29.71v9.34c0 .55.45 1 1 1s1-.45 1-1V9c0-.8-.32-1.56-.88-2.12m-13.26 9.26a3.02 3.02 0 0 0 2.4.87 3 3 0 0 0 1.65-.69l-4.23-4.23a3 3 0 0 0-.69 1.65c-.04.44.02.88.17 1.3.15.41.39.79.7 1.1m5.47 1.6A5.05 5.05 0 0 1 13.45 19a5.03 5.03 0 0 1-5.17-3.29c-.25-.69-.34-1.43-.28-2.16a5.05 5.05 0 0 1 1.26-2.88L6.58 7.99H4c-.27 0-.52.11-.71.29a1 1 0 0 0-.29.71v11c0 .27.11.52.29.71.19.19.44.29.71.29h15.59l-3.26-3.26z" })] })));
};
exports.CameraOff = CameraOff;
