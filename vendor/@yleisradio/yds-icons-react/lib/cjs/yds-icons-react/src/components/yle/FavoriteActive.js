"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoriteActive = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const FavoriteActive = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "M14.462 2.493a6.5 6.5 0 0 1 8.495 3.519 6.5 6.5 0 0 1-1.41 7.085l-8.84 8.84a1 1 0 0 1-1.414 0l-8.84-8.84a6.501 6.501 0 1 1 9.194-9.194l.353.353.353-.353a6.5 6.5 0 0 1 1.817-1.28z" })] })));
};
exports.FavoriteActive = FavoriteActive;
