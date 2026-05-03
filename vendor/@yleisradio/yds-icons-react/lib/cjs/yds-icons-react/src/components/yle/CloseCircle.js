"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloseCircle = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const CloseCircle = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12m11-9a9 9 0 1 0 0 18 9 9 0 0 0 0-18M9.879 8.464A1 1 0 1 0 8.464 9.88L10.586 12l-2.122 2.121a1 1 0 1 0 1.415 1.415L12 13.414l2.121 2.122a1 1 0 1 0 1.415-1.415L13.414 12l2.122-2.121a1 1 0 1 0-1.415-1.415L12 10.586z", clipRule: "evenodd" })] })));
};
exports.CloseCircle = CloseCircle;
