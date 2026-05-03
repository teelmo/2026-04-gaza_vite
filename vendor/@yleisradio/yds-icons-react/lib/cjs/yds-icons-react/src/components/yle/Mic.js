"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mic = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Mic = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M9.172 1.172A4 4 0 0 1 16 4v8a4 4 0 1 1-8 0V4a4 4 0 0 1 1.172-2.828M12 2a2 2 0 0 0-2 2v8a2 2 0 0 0 4 0V4a2 2 0 0 0-2-2m0 16a6 6 0 0 0 6-6v-2a1 1 0 1 1 2 0v2a8 8 0 0 1-7 7.937V22h3a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2h3v-2.063A8 8 0 0 1 4 12v-2a1 1 0 1 1 2 0v2a6 6 0 0 0 6 6", clipRule: "evenodd" })] })));
};
exports.Mic = Mic;
