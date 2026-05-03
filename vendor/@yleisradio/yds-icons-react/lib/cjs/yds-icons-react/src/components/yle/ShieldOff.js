"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShieldOff = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const ShieldOff = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M1.707.293A1 1 0 0 0 .293 1.707l2.824 2.824A1 1 0 0 0 3 5v7c0 3.446 2.282 6.2 4.341 8.003a22.7 22.7 0 0 0 4.104 2.836l.076.04.022.01.006.004.004.001a1 1 0 0 0 .914-.01 21.3 21.3 0 0 0 5.173-3.83l4.653 4.653a1 1 0 0 0 1.414-1.414zM16.226 17.64 5 6.414V12c0 2.553 1.718 4.8 3.659 6.497a20.7 20.7 0 0 0 3.34 2.365 19.3 19.3 0 0 0 4.227-3.222M11.65 1.063a1 1 0 0 1 .701 0l8 3A1 1 0 0 1 21 5v7.007a7.9 7.9 0 0 1-.355 2.29 1 1 0 1 1-1.91-.593A5.9 5.9 0 0 0 19 11.997V5.693l-7-2.625-2.81 1.049a1 1 0 0 1-.7-1.874z", clipRule: "evenodd" })] })));
};
exports.ShieldOff = ShieldOff;
