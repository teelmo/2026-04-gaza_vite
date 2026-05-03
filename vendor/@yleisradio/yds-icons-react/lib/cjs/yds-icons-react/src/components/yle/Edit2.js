"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Edit2 = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Edit2 = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "M19 3.172a1.83 1.83 0 0 0-1.293.535L4.395 17.02l-.97 3.556 3.556-.97L20.293 6.293a1.827 1.827 0 0 0-.593-2.982 1.8 1.8 0 0 0-.7-.14Zm-1.465-1.709a3.829 3.829 0 0 1 4.172 6.244l-13.5 13.5a1 1 0 0 1-.444.258l-5.5 1.5a1 1 0 0 1-1.228-1.228l1.5-5.5a1 1 0 0 1 .258-.444l13.5-13.5a3.8 3.8 0 0 1 1.242-.83" })] })));
};
exports.Edit2 = Edit2;
