"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationOff = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const NotificationOff = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M1.707.293A1 1 0 0 0 .293 1.707L5.58 6.994 5 8.001c0 3.352-.717 5.434-1.378 6.645a6 6 0 0 1-.88 1.244 3 3 0 0 1-.305.284l-.003.002A1 1 0 0 0 3 18h13.586l5.707 5.707a1 1 0 0 0 1.414-1.414L6.981 5.567l-.029-.029zm5.29 8.118c-.057 3.419-.812 5.713-1.62 7.193A9 9 0 0 1 5.15 16h9.437zM11.663.999A7 7 0 0 1 19 8.027c-.025 1.59.176 3.176.595 4.71a1 1 0 1 1-1.93.527A19 19 0 0 1 17 7.988a5 5 0 0 0-7.775-4.156 1 1 0 1 1-1.11-1.664A7 7 0 0 1 11.663 1M9.768 20.135a1 1 0 0 1 1.367.363 1 1 0 0 0 1.73 0 1 1 0 1 1 1.73 1.004 3 3 0 0 1-5.19 0 1 1 0 0 1 .363-1.367", clipRule: "evenodd" })] })));
};
exports.NotificationOff = NotificationOff;
