"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Frown = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Frown = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12m11-9a9 9 0 1 0 0 18 9 9 0 0 0 0-18M9 8a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2zm5 1a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H15a1 1 0 0 1-1-1m1.203 7.604A1 1 0 0 0 16.8 15.4l-.001-.001-.001-.002-.003-.004-.007-.009-.021-.027a6 6 0 0 0-.318-.361 7 7 0 0 0-.923-.805c-.798-.58-2-1.191-3.526-1.191s-2.728.61-3.526 1.191a7 7 0 0 0-1.17 1.08q-.045.053-.07.086l-.022.027-.007.01-.003.003-.001.002H7.2a1 1 0 0 0 1.597 1.205l.004-.006.034-.041a5 5 0 0 1 .815-.748c.578-.42 1.376-.81 2.35-.81s1.772.39 2.35.81a5 5 0 0 1 .815.748l.033.041z", clipRule: "evenodd" })] })));
};
exports.Frown = Frown;
