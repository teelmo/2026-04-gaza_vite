"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCheck = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const UserCheck = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M8.5 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10m-3 5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m18.207 1.293a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L19 11.586l3.293-3.293a1 1 0 0 1 1.414 0M1.464 15.464A5 5 0 0 1 5 14h7a5 5 0 0 1 5 5v2a1 1 0 1 1-2 0v-2a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v2a1 1 0 1 1-2 0v-2a5 5 0 0 1 1.464-3.536", clipRule: "evenodd" })] })));
};
exports.UserCheck = UserCheck;
