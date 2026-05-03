"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AirplayAudio = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const AirplayAudio = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "M3 11a9 9 0 0 1 18 0 8.96 8.96 0 0 1-2.07 5.744 1 1 0 0 0 1.538 1.277A10.96 10.96 0 0 0 23 11c0-6.075-4.925-11-11-11S1 4.925 1 11c0 2.65.939 5.084 2.5 6.983a1 1 0 1 0 1.545-1.27A8.96 8.96 0 0 1 3 11m9-5a5 5 0 0 0-4.104 7.857A1 1 0 0 1 6.256 15a7 7 0 1 1 11.49 0 1 1 0 0 1-1.642-1.145A5 5 0 0 0 12 6m-1 5a1 1 0 1 1 1.943.333A1 1 0 1 0 14.83 12a3 3 0 1 0-5.658 0 1 1 0 1 0 1.886-.667A1 1 0 0 1 11 11m1.768 3.36a1 1 0 0 0-1.536 0l-5 6A1 1 0 0 0 7 22h10a1 1 0 0 0 .768-1.64zM12 16.562 14.865 20h-5.73z" })] })));
};
exports.AirplayAudio = AirplayAudio;
