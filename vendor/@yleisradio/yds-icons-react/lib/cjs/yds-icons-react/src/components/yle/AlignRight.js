"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlignRight = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const AlignRight = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "M3 5a1 1 0 0 0 0 2h18a1 1 0 1 0 0-2zm3 5a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1m-3 3a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2zm4 4a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2z" })] })));
};
exports.AlignRight = AlignRight;
