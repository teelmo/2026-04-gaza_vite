"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingBag = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const ShoppingBag = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M5.2 1.4A1 1 0 0 1 6 1h12a1 1 0 0 1 .8.4l2.994 3.992c.13.168.206.38.206.608v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6c0-.229.077-.44.206-.608zM4 7v13a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7zm15-2H5l1.5-2h11zM8 9a1 1 0 0 1 1 1 3 3 0 0 0 6 0 1 1 0 1 1 2 0 5 5 0 1 1-10 0 1 1 0 0 1 1-1", clipRule: "evenodd" })] })));
};
exports.ShoppingBag = ShoppingBag;
