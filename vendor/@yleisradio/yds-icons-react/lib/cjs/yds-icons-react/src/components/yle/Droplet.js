"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Droplet = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Droplet = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M12 1.69a1 1 0 0 1 .707.293l5.66 5.66a9.001 9.001 0 1 1-12.724 0l5.65-5.66A1 1 0 0 1 12 1.69m0 2.415L7.058 9.057a7 7 0 1 0 9.896 0l-4.952-4.952Z", clipRule: "evenodd" })] })));
};
exports.Droplet = Droplet;
