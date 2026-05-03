"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hash = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Hash = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M16.11 2.006a1 1 0 0 1 .884 1.105L16.45 8H20a1 1 0 1 1 0 2h-3.772l-.444 4H20a1 1 0 1 1 0 2h-4.438l-.568 5.11a1 1 0 1 1-1.988-.22L13.55 16H9.562l-.568 5.11a1 1 0 0 1-1.988-.22L7.55 16H4a1 1 0 1 1 0-2h3.772l.444-4H4a1 1 0 0 1 0-2h4.438l.568-5.11a1 1 0 1 1 1.988.22L10.45 8h3.987l.568-5.11a1 1 0 0 1 1.104-.884ZM10.228 10l-.444 4h3.988l.444-4z", clipRule: "evenodd" })] })));
};
exports.Hash = Hash;
