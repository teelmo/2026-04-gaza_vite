"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageCircle = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const MessageCircle = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "M13.055 2.002 12.5 2a9.4 9.4 0 0 0-4.25 1.007A9.5 9.5 0 0 0 3 11.5l.006.368a9.4 9.4 0 0 0 .695 3.213l.123.283-1.773 5.32-.03.106a1 1 0 0 0 1.295 1.159l5.319-1.774.285.124a9.5 9.5 0 0 0 12.075-4.552A9.4 9.4 0 0 0 22 11.497V11a9.5 9.5 0 0 0-2.764-6.236 9.48 9.48 0 0 0-6.18-2.762M12.497 4h.472-.024a7.48 7.48 0 0 1 7.057 7.056L20 11.5a7.4 7.4 0 0 1-.793 3.35A7.5 7.5 0 0 1 12.5 19a7.4 7.4 0 0 1-3.35-.793l-.121-.051a1 1 0 0 0-.645-.005L4.58 19.42l1.268-3.803a1 1 0 0 0-.056-.767A7.4 7.4 0 0 1 5 11.503a7.5 7.5 0 0 1 4.147-6.708A7.4 7.4 0 0 1 12.497 4" })] })));
};
exports.MessageCircle = MessageCircle;
