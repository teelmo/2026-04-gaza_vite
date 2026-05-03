"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hd = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Hd = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3zm13 5.5V14h.25a1.75 1.75 0 1 0 0-3.5zm4 1.75A3.75 3.75 0 0 1 15.25 16h-.75a1.5 1.5 0 0 1-1.5-1.5V10a1.5 1.5 0 0 1 1.5-1.5h.75A3.75 3.75 0 0 1 19 12.25M11 9.5a1 1 0 1 0-2 0v2H7v-2a1 1 0 0 0-2 0V15a1 1 0 1 0 2 0v-1.5h2V15a1 1 0 1 0 2 0z", clipRule: "evenodd" })] })));
};
exports.Hd = Hd;
