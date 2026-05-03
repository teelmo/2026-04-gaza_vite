"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Episodes = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Episodes = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M19.867 2H8.133C6.955 2 6 3.023 6 4.286V5h-.867A3.14 3.14 0 0 0 2 8.143v10.714A3.14 3.14 0 0 0 5.133 22h10.734A3.14 3.14 0 0 0 19 18.857V18h.867C21.045 18 22 16.977 22 15.714V4.286C22 3.023 21.045 2 19.867 2M17 18H8.133C6.955 18 6 16.977 6 15.714V7h-.867C4.512 7 4 7.507 4 8.143v10.714C4 19.493 4.512 20 5.133 20h10.734c.621 0 1.133-.508 1.133-1.143zm-5.03-4.089a.73.73 0 0 1-.37-.638V6.727a.73.73 0 0 1 .37-.638.7.7 0 0 1 .726.027l4.977 3.272A.73.73 0 0 1 18 10a.73.73 0 0 1-.327.612l-4.977 3.272a.7.7 0 0 1-.726.027", clipRule: "evenodd" })] })));
};
exports.Episodes = Episodes;
