"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Edit = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Edit = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M18 1.879c-.828 0-1.622.329-2.207.914l-12.5 12.5a1 1 0 0 0-.263.465l-1 4a1 1 0 0 0 1.213 1.212l4-1a1 1 0 0 0 .464-.263l12.5-12.5a3.12 3.12 0 0 0-1.012-5.09A3.1 3.1 0 0 0 18 1.879m-.793 2.328a1.121 1.121 0 0 1 1.586 1.586L6.489 18.097l-2.115.529.529-2.115zM12 19a1 1 0 1 0 0 2h9a1 1 0 1 0 0-2z", clipRule: "evenodd" })] })));
};
exports.Edit = Edit;
