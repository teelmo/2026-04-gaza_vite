"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LifeBuoy = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const LifeBuoy = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12m3.968-5.618A8.96 8.96 0 0 0 3 12c0 2.125.736 4.078 1.968 5.618l2.86-2.86A5 5 0 0 1 7 12c0-1.02.305-1.967.828-2.757l-2.86-2.86Zm1.414-1.414 2.86 2.86A5 5 0 0 1 12 7c1.02 0 1.967.305 2.757.828l2.86-2.86A8.96 8.96 0 0 0 12 3a8.96 8.96 0 0 0-5.618 1.968M17 12c0-1.02-.305-1.967-.828-2.757l2.86-2.86A8.96 8.96 0 0 1 21 12a8.96 8.96 0 0 1-1.968 5.618l-2.86-2.86A5 5 0 0 0 17 12m-5 9a8.96 8.96 0 0 1-5.618-1.968l2.86-2.86A5 5 0 0 0 12 17c1.02 0 1.967-.305 2.757-.828l2.86 2.86A8.96 8.96 0 0 1 12 21m0-12a3 3 0 1 0 0 6 3 3 0 0 0 0-6", clipRule: "evenodd" })] })));
};
exports.LifeBuoy = LifeBuoy;
