"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitBranch = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const GitBranch = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M22 6a4 4 0 0 1-3.04 3.884 10 10 0 0 1-9.076 9.077A4.002 4.002 0 0 1 2 18a4 4 0 0 1 3-3.874V3a1 1 0 0 1 2 0v11.126a4.01 4.01 0 0 1 2.862 2.827 8 8 0 0 0 7.091-7.091A4.002 4.002 0 0 1 18 2a4 4 0 0 1 4 4m-4-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4M6 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4", clipRule: "evenodd" })] })));
};
exports.GitBranch = GitBranch;
