"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cookies = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Cookies = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M2 12C2 6.486 6.45 2 12.06 2a1 1 0 0 1 1 1.02 4.497 4.497 0 0 0 4.2 4.582 1 1 0 0 1 .918.841 3.014 3.014 0 0 0 2.859 2.538 1 1 0 0 1 .963.999C22 17.5 17.515 22 12 22 6.488 22 2 17.512 2 12m9.125-7.948A7.99 7.99 0 0 0 4 12c0 4.408 3.592 8 8 8 4.116 0 7.525-3.143 7.954-7.161a5.02 5.02 0 0 1-3.574-3.335c-2.705-.502-4.856-2.669-5.255-5.452M15 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-6-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4m1.5 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3", clipRule: "evenodd" })] })));
};
exports.Cookies = Cookies;
