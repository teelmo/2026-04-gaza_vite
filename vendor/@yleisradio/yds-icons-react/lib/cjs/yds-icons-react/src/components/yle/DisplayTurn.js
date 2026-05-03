"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayTurn = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const DisplayTurn = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "M18.472 4.778a1 1 0 1 1-2 0 1 1 0 0 1 2 0m2 2.43a1 1 0 1 1-2 0 1 1 0 0 1 2 0M1 4a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3zm3-1a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm16 8h-6V9h6a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h-6v-2h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1" })] })));
};
exports.DisplayTurn = DisplayTurn;
