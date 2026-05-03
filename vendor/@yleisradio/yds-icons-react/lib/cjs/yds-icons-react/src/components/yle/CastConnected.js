"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastConnected = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const CastConnected = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "M4 5a1 1 0 0 0-1 1v2a1 1 0 0 1-2 0V6a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3h-6a1 1 0 1 1 0-2h6a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zm-2.994 6.94a1 1 0 0 1 1.104-.884 10 10 0 0 1 8.834 8.834 1 1 0 0 1-1.988.22 8 8 0 0 0-7.067-7.066 1 1 0 0 1-.883-1.104m.014 3.96a1 1 0 0 1 1.18-.78 6 6 0 0 1 4.68 4.68 1 1 0 1 1-1.96.4 4 4 0 0 0-3.12-3.12 1 1 0 0 1-.78-1.18M1 20a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1M5.5 7a.5.5 0 0 0-.5.5v1.156a.52.52 0 0 0 .318.475c.87.373 3.346 1.533 5.182 3.369 1.433 1.433 2.142 3.328 2.392 4.123a.53.53 0 0 0 .501.377H18.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5z" })] })));
};
exports.CastConnected = CastConnected;
