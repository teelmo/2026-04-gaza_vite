"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Codepen = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Codepen = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M12.557 1.17a.995.995 0 0 0-1.114 0L1.469 7.651a1 1 0 0 0-.358.39A1 1 0 0 0 1 8.496v7.006a1 1 0 0 0 .472.847l9.971 6.48a.995.995 0 0 0 1.114 0l9.967-6.478a1 1 0 0 0 .476-.87V8.518a1 1 0 0 0-.473-.868zM11 3.842 3.788 8.53 7 10.779l4-2.8zm2 4.136V3.843l7.212 4.688L17 10.779l-4-2.8ZM18.744 12 21 10.42v3.16zM12 9.72 8.744 12 12 14.28 15.256 12zm-9 .7L5.256 12 3 13.58zm4 2.8-3.212 2.25L11 20.156V16.02zm13.212 2.25L17 13.22l-4 2.8v4.137z", clipRule: "evenodd" })] })));
};
exports.Codepen = Codepen;
