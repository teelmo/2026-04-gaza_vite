"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingCart = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const ShoppingCart = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M1 0a1 1 0 1 0 0 2h3.18l.832 4.155q.006.043.017.084l1.67 8.347A3 3 0 0 0 9.69 17h9.702a3 3 0 0 0 2.99-2.415l1.601-8.398A1 1 0 0 0 23 5H6.82L5.98.804A1 1 0 0 0 5 0zm7.66 14.195L7.22 7h14.571l-1.372 7.198a1 1 0 0 1-1 .802H9.66a1 1 0 0 1-1-.805M7 21a2 2 0 1 1 4 0 2 2 0 0 1-4 0m11 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0", clipRule: "evenodd" })] })));
};
exports.ShoppingCart = ShoppingCart;
