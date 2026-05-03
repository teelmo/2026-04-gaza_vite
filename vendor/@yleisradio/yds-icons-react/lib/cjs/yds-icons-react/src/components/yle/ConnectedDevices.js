"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectedDevices = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const ConnectedDevices = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M2.571 4C2.38 4 2 4.226 2 4.8v14.4c0 .574.38.8.571.8h7.858c.192 0 .571-.226.571-.8V4.8c0-.574-.38-.8-.571-.8zM0 4.8C0 3.385 1.028 2 2.571 2h7.858C11.972 2 13 3.385 13 4.8v14.4c0 1.415-1.028 2.8-2.571 2.8H2.57C1.028 22 0 20.614 0 19.2zm7.75 12.45a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M14 20a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1m0-16a1 1 0 0 1 1-1h6a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-6a1 1 0 1 1 0-2h6a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-6a1 1 0 0 1-1-1", clipRule: "evenodd" })] })));
};
exports.ConnectedDevices = ConnectedDevices;
