"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FolderMinus = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const FolderMinus = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M4 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3h-8.465L9.832 2.445A1 1 0 0 0 9 2zm-.707 2.293A1 1 0 0 1 4 4h4.465l1.703 2.555A1 1 0 0 0 11 7h9a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 .293-.707M9 13a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2z", clipRule: "evenodd" })] })));
};
exports.FolderMinus = FolderMinus;
