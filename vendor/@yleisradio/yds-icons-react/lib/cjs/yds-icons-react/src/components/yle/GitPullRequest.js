"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitPullRequest = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const GitPullRequest = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M7 9.874A4.002 4.002 0 0 0 6 2a4 4 0 0 0-1 7.874V21a1 1 0 1 0 2 0zM4 6a2 2 0 1 1 4 0 2 2 0 0 1-4 0m8 0a1 1 0 0 1 1-1h3a3 3 0 0 1 3 3v6.126A4.002 4.002 0 0 1 18 22a4 4 0 0 1-1-7.874V8a1 1 0 0 0-1-1h-3a1 1 0 0 1-1-1m4 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0", clipRule: "evenodd" })] })));
};
exports.GitPullRequest = GitPullRequest;
