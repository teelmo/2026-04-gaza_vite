"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bookmark = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Bookmark = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M7 4a1 1 0 0 0-1 1v14.057l5.419-3.87a1 1 0 0 1 1.162 0L18 19.056V5a1 1 0 0 0-1-1zM4.879 2.879A3 3 0 0 1 7 2h10a3 3 0 0 1 3 3v16a1 1 0 0 1-1.581.814L12 17.229l-6.419 4.585A1 1 0 0 1 4 21V5a3 3 0 0 1 .879-2.121", clipRule: "evenodd" })] })));
};
exports.Bookmark = Bookmark;
