"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogIn = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const LogIn = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "M15 2a1 1 0 1 0 0 2h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-4a1 1 0 1 0 0 2h4a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zM9.293 6.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414-1.414L12.586 13H2.857C2.384 13 2 12.552 2 12s.384-1 .857-1h9.729L9.293 7.707a1 1 0 0 1 0-1.414" })] })));
};
exports.LogIn = LogIn;
