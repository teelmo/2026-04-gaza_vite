"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectedServices = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const ConnectedServices = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M21.14 3.88c-.59-.6-1.3-1.07-2.08-1.39S17.45 2 16.61 2a6.42 6.42 0 0 0-4.53 1.88l-.06.06-.06-.06a6.4 6.4 0 0 0-2.08-1.4c-.78-.32-1.61-.49-2.45-.49A6.42 6.42 0 0 0 2.9 3.87C.35 6.42.3 10.62 3.31 13.7l8.01 8.01c.19.19.44.29.71.29s.52-.11.71-.29l2.99-2.99v-.02l2.99-2.99v-.01l1.99-1.99c3.02-3.08 2.96-7.29.41-9.83zM19.3 12.3l-1.29 1.29-1.29-1.29a.996.996 0 1 0-1.41 1.41L16.6 15l-1.59 1.59-1.29-1.29a.996.996 0 1 0-1.41 1.41L13.6 18l-1.59 1.59-7.29-7.29C2.4 9.93 2.6 6.98 4.3 5.29c.41-.41.89-.74 1.43-.96.53-.22 1.11-.34 1.69-.34s1.15.11 1.69.34c.53.22 1.02.55 1.43.96l.07.07L8.18 7.8c-.58.59-.91 1.38-.91 2.21a3.11 3.11 0 0 0 3.11 3.11c.82 0 1.62-.33 2.2-.9l2.26-2.21c.37-.37.88-.58 1.41-.58s1.03.21 1.4.58l1.96 1.96c-.1.11-.2.23-.31.34zm1.38-2.1-1.62-1.62a4 4 0 0 0-5.62-.01l-2.26 2.21a1.136 1.136 0 0 1-1.59.01 1.12 1.12 0 0 1 .01-1.58l3.13-3.14.76-.78c.41-.41.89-.74 1.43-.96.53-.22 1.11-.34 1.69-.34s1.15.11 1.69.34c.53.22 1.02.55 1.43.96 1.22 1.22 1.66 3.08.96 4.91z", clipRule: "evenodd" })] })));
};
exports.ConnectedServices = ConnectedServices;
