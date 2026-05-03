"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mail = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Mail = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M4 3C2.348 3 1 4.348 1 6v12c0 1.652 1.348 3 3 3h16c1.652 0 3-1.348 3-3V6c0-1.652-1.348-3-3-3zm-.893 2.554C3.272 5.227 3.612 5 4 5h16c.388 0 .728.227.893.554L12 11.779zM3 7.92V18c0 .548.452 1 1 1h16c.548 0 1-.452 1-1V7.92l-8.426 5.9a1 1 0 0 1-1.147 0z", clipRule: "evenodd" })] })));
};
exports.Mail = Mail;
