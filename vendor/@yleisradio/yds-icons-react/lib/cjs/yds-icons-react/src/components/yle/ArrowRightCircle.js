"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrowRightCircle = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const ArrowRightCircle = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "m12.707 7.293 4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L13.586 13H7.8c-.442 0-.8-.448-.8-1s.358-1 .8-1h5.786l-2.293-2.293a1 1 0 0 1 1.414-1.414M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12m11-9a9 9 0 1 0 0 18 9 9 0 0 0 0-18" })] })));
};
exports.ArrowRightCircle = ArrowRightCircle;
