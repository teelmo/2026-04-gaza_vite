"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchActive = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const SearchActive = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M16.618 18.032a9 9 0 1 1 1.414-1.414l3.675 3.675a1 1 0 0 1-1.414 1.414zM4 11a7 7 0 1 1 12.042 4.856 1 1 0 0 0-.186.186A7 7 0 0 1 4 11m12 0a5 5 0 1 1-10 0 5 5 0 0 1 10 0", clipRule: "evenodd" })] })));
};
exports.SearchActive = SearchActive;
