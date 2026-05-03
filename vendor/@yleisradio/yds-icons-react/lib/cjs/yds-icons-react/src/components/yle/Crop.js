"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Crop = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Crop = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M7.13 1.009a1 1 0 1 0-2-.018l-.036 4.103-4.103.036a1 1 0 1 0 .018 2l4.068-.035L5 15.99V16a3 3 0 0 0 3 3h9v4a1 1 0 1 0 2 0v-4h4a1 1 0 1 0 0-2h-4V8a3 3 0 0 0-3-3l-8.905.077zm-.053 6.068L7 16.004A1 1 0 0 0 8 17h9V8a1 1 0 0 0-.996-1z", clipRule: "evenodd" })] })));
};
exports.Crop = Crop;
