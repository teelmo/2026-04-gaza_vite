"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bluetooth = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Bluetooth = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M11.617.076a1 1 0 0 1 1.09.217l5.5 5.5a1 1 0 0 1 0 1.414L13.414 12l4.793 4.793a1 1 0 0 1 0 1.414l-5.5 5.5A1 1 0 0 1 11 23v-8.586l-3.793 3.793a1 1 0 1 1-1.414-1.414L10.586 12 5.793 7.207a1 1 0 0 1 1.414-1.414L11 9.586V1a1 1 0 0 1 .617-.924M13 14.414l3.086 3.086L13 20.586zm0-4.828V3.414L16.086 6.5z", clipRule: "evenodd" })] })));
};
exports.Bluetooth = Bluetooth;
