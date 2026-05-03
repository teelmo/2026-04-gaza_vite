"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.History = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const History = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "M10.605 2.098a10 10 0 1 1-8.038 13.225 1 1 0 0 1 1.886-.665A8 8 0 1 0 6.325 6.36L3.515 9H6a1 1 0 0 1 0 2H1a1 1 0 0 1-1-1V5a1 1 0 0 1 2 0v2.679l2.944-2.767a10 10 0 0 1 5.661-2.814M13 7a1 1 0 1 0-2 0v5.25a1 1 0 0 0 .6.916l4 1.75a1 1 0 0 0 .8-1.832L13 11.596z" })] })));
};
exports.History = History;
