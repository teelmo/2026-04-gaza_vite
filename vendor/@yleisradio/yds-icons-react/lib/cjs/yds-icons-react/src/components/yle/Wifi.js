"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wifi = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Wifi = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "M2.081 9.75a15 15 0 0 1 19.838 0 1 1 0 1 0 1.322-1.5 17 17 0 0 0-22.482 0 1 1 0 0 0 1.322 1.5m9.959 1.252a10 10 0 0 0-6.4 2.316 1 1 0 1 1-1.28-1.536 12 12 0 0 1 15.36 0 1 1 0 1 1-1.28 1.536 10 10 0 0 0-6.4-2.316m-2.93 5.923a5 5 0 0 1 5.79 0 1 1 0 0 0 1.16-1.63 7 7 0 0 0-8.11 0 1 1 0 1 0 1.16 1.63M12 19a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2z" })] })));
};
exports.Wifi = Wifi;
