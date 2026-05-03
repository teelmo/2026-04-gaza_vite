"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageSquare = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const MessageSquare = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M5 6a1 1 0 0 0-1 1v13.586l2.293-2.293A1 1 0 0 1 7 18h12a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zM2.879 4.879A3 3 0 0 1 5 4h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7.414l-3.707 3.707A1 1 0 0 1 2 23V7a3 3 0 0 1 .879-2.121", clipRule: "evenodd" })] })));
};
exports.MessageSquare = MessageSquare;
