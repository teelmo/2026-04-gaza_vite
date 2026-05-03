"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Layers = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Layers = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M12.447 1.106a1 1 0 0 0-.894 0l-10 5a1 1 0 0 0 0 1.788l10 5a1 1 0 0 0 .894 0l10-5a1 1 0 0 0 0-1.788zM12 10.882 4.236 7 12 3.118 19.764 7zm-10.894.67a1 1 0 0 1 1.341-.447L12 15.883l9.553-4.777a1 1 0 0 1 .894 1.79l-10 5a1 1 0 0 1-.894 0l-10-5a1 1 0 0 1-.447-1.342Zm0 5a1 1 0 0 1 1.341-.447L12 20.883l9.553-4.777a1 1 0 0 1 .894 1.79l-10 5a1 1 0 0 1-.894 0l-10-5a1 1 0 0 1-.447-1.342Z", clipRule: "evenodd" })] })));
};
exports.Layers = Layers;
