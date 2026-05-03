"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Play2 = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Play2 = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M7 4.832 18.15 12 7 19.168zm-.46-2.673A1 1 0 0 0 5 3v18a1 1 0 0 0 1.54.841l14-9a1 1 0 0 0 0-1.682z", clipRule: "evenodd" })] })));
};
exports.Play2 = Play2;
