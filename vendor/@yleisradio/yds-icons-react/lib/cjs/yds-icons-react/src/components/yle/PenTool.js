"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PenTool = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const PenTool = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M1.293 1.293a1 1 0 0 1 .96-.26l14.482 3.495a1 1 0 0 1 .746.776l1.153 5.765a1 1 0 0 1 1.073.224l3 3a1 1 0 0 1 0 1.414l-7 7a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1-.224-1.073L5.304 17.48a1 1 0 0 1-.776-.746L1.032 2.253a1 1 0 0 1 .26-.96Zm7 8.414L3.805 5.22l2.516 10.425 6.35 1.27 4.242-4.244-1.27-6.349L5.22 3.806l4.487 4.486a3 3 0 1 1-1.414 1.414Zm1.988.598a1 1 0 1 0 .025-.025l-.013.013zm3.42 8.408.006-.006 5-5 .006-.005.287-.288L20.586 15 15 20.586 13.414 19z", clipRule: "evenodd" })] })));
};
exports.PenTool = PenTool;
