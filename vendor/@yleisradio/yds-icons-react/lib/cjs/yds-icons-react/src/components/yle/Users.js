"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Users = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M9 2a5 5 0 1 0 0 10A5 5 0 0 0 9 2M6 7a3 3 0 1 1 6 0 3 3 0 0 1-6 0m9.031-4.118a1 1 0 0 1 1.217-.72 5 5 0 0 1 0 9.687 1 1 0 0 1-.496-1.938 3 3 0 0 0 0-5.812 1 1 0 0 1-.72-1.217ZM5 14a5 5 0 0 0-5 5v2a1 1 0 1 0 2 0v-2a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v2a1 1 0 1 0 2 0v-2a5 5 0 0 0-5-5zm15.25.162a1 1 0 1 0-.5 1.936A3 3 0 0 1 22 19.001V21a1 1 0 1 0 2 0v-2a5 5 0 0 0-3.75-4.838", clipRule: "evenodd" })] })));
};
exports.Users = Users;
