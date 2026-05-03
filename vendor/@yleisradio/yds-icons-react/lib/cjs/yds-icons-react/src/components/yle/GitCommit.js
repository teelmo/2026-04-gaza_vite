"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitCommit = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const GitCommit = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M7.1 12.995A1 1 0 0 1 7 13H1.05a1 1 0 1 1 0-2H7q.05 0 .1.005a5.002 5.002 0 0 1 9.801 0 1 1 0 0 1 .11-.005h5.95a1 1 0 1 1 0 2h-5.95a1 1 0 0 1-.11-.006 5.002 5.002 0 0 1-9.802.001ZM9 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0", clipRule: "evenodd" })] })));
};
exports.GitCommit = GitCommit;
