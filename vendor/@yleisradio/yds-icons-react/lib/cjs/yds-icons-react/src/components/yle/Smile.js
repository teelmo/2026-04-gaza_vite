"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Smile = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Smile = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1M3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0m4.4 1.2a1 1 0 0 1 1.397.196l.005.006.033.041a5 5 0 0 0 .815.748c.578.42 1.376.81 2.35.81s1.772-.39 2.35-.81a5 5 0 0 0 .815-.748l.034-.041.004-.006A1 1 0 0 1 16.8 14.6l-.001.001-.001.002-.003.004-.007.009-.021.027-.07.086q-.089.107-.248.276a7 7 0 0 1-.923.804c-.798.58-2 1.191-3.526 1.191s-2.728-.61-3.526-1.191a7 7 0 0 1-1.17-1.08l-.07-.086-.022-.027-.007-.01-.003-.003V14.6H7.2a1 1 0 0 1 .2-1.4M14 9a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H15a1 1 0 0 1-1-1M9 8a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2z", clipRule: "evenodd" })] })));
};
exports.Smile = Smile;
