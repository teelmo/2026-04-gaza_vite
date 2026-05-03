"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageSquareActive = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const MessageSquareActive = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "M2.9 4.9C3.4 4.3 4.2 4 5 4h14c.8 0 1.6.3 2.1.9.6.5.9 1.3.9 2.1v10c0 .8-.3 1.6-.9 2.1-.5.6-1.3.9-2.1.9H7.4l-3.7 3.7c-.3.3-.7.4-1.1.2-.4-.1-.6-.5-.6-.9V7c0-.8.3-1.6.9-2.1" })] })));
};
exports.MessageSquareActive = MessageSquareActive;
