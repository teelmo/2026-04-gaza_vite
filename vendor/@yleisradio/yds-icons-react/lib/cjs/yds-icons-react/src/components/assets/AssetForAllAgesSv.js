"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetForAllAgesSv = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const AssetForAllAgesSv = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsxs)("g", { clipPath: "url(#for-all-ages-sv__a)", children: [(0, jsx_runtime_1.jsx)("path", { fill: "#3E3A38", d: "M11.856.396A11.727 11.727 0 0 0 .353 14.414a11.73 11.73 0 0 0 9.215 9.217 11.727 11.727 0 0 0 14.016-11.505A11.73 11.73 0 0 0 11.856.396" }), (0, jsx_runtime_1.jsx)("path", { fill: "#1D1D1B", d: "M12 24A12 12 0 0 1 .232 14.337 12.004 12.004 0 0 1 7.412.91a11.998 11.998 0 0 1 16.531 12.269 12 12 0 0 1-3.46 7.31A11.93 11.93 0 0 1 12 24M12 .54A11.455 11.455 0 0 0 .764 14.232a11.46 11.46 0 0 0 15.617 8.353 11.46 11.46 0 0 0 7.075-10.583A11.475 11.475 0 0 0 12 .54" }), (0, jsx_runtime_1.jsx)("path", { fill: "#78B945", d: "M5.628 5.92h12.744v3.35h-4.276v10.22H9.904V9.269H5.628V5.921Z" })] }), (0, jsx_runtime_1.jsx)("defs", { children: (0, jsx_runtime_1.jsx)("clipPath", { id: "for-all-ages-sv__a", children: (0, jsx_runtime_1.jsx)("path", { fill: "#fff", d: "M0 0h24v24H0z" }) }) })] })));
};
exports.AssetForAllAgesSv = AssetForAllAgesSv;
