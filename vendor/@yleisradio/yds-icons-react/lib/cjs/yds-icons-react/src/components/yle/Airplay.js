"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Airplay = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Airplay = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "M3.293 4.293A1 1 0 0 1 4 4h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-1a1 1 0 1 0 0 2h1a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H4a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h1a1 1 0 1 0 0-2H4a1 1 0 0 1-1-1V5a1 1 0 0 1 .293-.707m9.475 10.067a1 1 0 0 0-1.536 0l-5 6A1 1 0 0 0 7 22h10a1 1 0 0 0 .768-1.64zM12 16.562 14.865 20h-5.73z" })] })));
};
exports.Airplay = Airplay;
