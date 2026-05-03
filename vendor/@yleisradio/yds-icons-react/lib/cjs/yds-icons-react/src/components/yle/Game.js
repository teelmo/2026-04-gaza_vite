"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Game = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m0 10H3V8h18zM8 15H6v-2H4v-2h2V9h2v2h2v2H8zm6.5-3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m2.5-1.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0", clipRule: "evenodd" })] })));
};
exports.Game = Game;
