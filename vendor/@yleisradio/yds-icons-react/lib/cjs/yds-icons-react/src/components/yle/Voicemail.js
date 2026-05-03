"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Voicemail = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Voicemail = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M9.743 15A5.5 5.5 0 1 0 5.5 17h13a5.5 5.5 0 1 0-4.243-2zM2 11.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0M18.5 8a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7", clipRule: "evenodd" })] })));
};
exports.Voicemail = Voicemail;
