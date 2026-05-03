"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShareAndroid = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const ShareAndroid = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M15.158 7.815a4 4 0 1 0-1.008-1.727L8.842 9.185a4 4 0 1 0 0 5.63l5.309 3.093A4.003 4.003 0 0 0 18 23a4 4 0 1 0-2.839-6.818l-5.31-3.095a4 4 0 0 0 0-2.175zM18 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4M7.7 10.945a1 1 0 0 0 .056.097c.156.284.244.61.244.958a2 2 0 0 1-.3 1.054A1.999 1.999 0 0 1 4 12a2 2 0 0 1 3.7-1.055m8.515 7.152a1 1 0 0 0 .123-.21 2 2 0 1 1-.123.21", clipRule: "evenodd" })] })));
};
exports.ShareAndroid = ShareAndroid;
