"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PieChart = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const PieChart = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M12 1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1A11 11 0 0 0 12 1m1 10V3.056A9 9 0 0 1 20.944 11zM8.4 3.747a1 1 0 0 0-.8-1.834A11 11 0 1 0 22.131 16.28a1 1 0 0 0-1.842-.778A9.001 9.001 0 1 1 8.399 3.745Z", clipRule: "evenodd" })] })));
};
exports.PieChart = PieChart;
