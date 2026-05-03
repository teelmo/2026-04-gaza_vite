"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Command = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M3.172 3.172A4 4 0 0 1 10 6v2h4V6a4 4 0 1 1 4 4h-2v4h2a4 4 0 1 1-4 4v-2h-4v2a4 4 0 1 1-4-4h2v-4H6a4 4 0 0 1-2.828-6.828M8 8V6a2 2 0 1 0-2 2zm2 2v4h4v-4zm-2 6H6a2 2 0 1 0 2 2zm8 0v2a2 2 0 1 0 2-2zm0-8h2a2 2 0 1 0-2-2z", clipRule: "evenodd" })] })));
};
exports.Command = Command;
