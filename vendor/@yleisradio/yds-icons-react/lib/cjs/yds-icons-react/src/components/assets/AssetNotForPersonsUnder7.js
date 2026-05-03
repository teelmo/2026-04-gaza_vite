"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetNotForPersonsUnder7 = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const AssetNotForPersonsUnder7 = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsxs)("g", { clipPath: "url(#not-for-persons-under-7__a)", children: [(0, jsx_runtime_1.jsx)("path", { fill: "#3E3A38", d: "M11.884.448A11.73 11.73 0 0 0 .373 14.468a11.734 11.734 0 0 0 15.996 8.555 11.733 11.733 0 0 0 3.808-19.137A11.73 11.73 0 0 0 11.884.448" }), (0, jsx_runtime_1.jsx)("path", { fill: "#1D1D1B", d: "M12 24A12 12 0 0 1 .232 14.338 12.004 12.004 0 0 1 7.412.908a11.998 11.998 0 0 1 16.531 12.27 12 12 0 0 1-3.46 7.31A11.9 11.9 0 0 1 12 24M12 .54A11.455 11.455 0 0 0 .768 14.234a11.458 11.458 0 0 0 15.618 8.35 11.46 11.46 0 0 0 7.074-10.582A11.475 11.475 0 0 0 12 .54" }), (0, jsx_runtime_1.jsx)("path", { fill: "#F1E400", d: "M6.496 5.217H17.5v2.544a14 14 0 0 0-2.4 2.8 16.3 16.3 0 0 0-1.84 4.082 19.3 19.3 0 0 0-.724 4.14H8.78a21.8 21.8 0 0 1 1.396-5.573 21 21 0 0 1 3.02-4.8h-6.7z" })] }), (0, jsx_runtime_1.jsx)("defs", { children: (0, jsx_runtime_1.jsx)("clipPath", { id: "not-for-persons-under-7__a", children: (0, jsx_runtime_1.jsx)("path", { fill: "#fff", d: "M0 0h24v24H0z" }) }) })] })));
};
exports.AssetNotForPersonsUnder7 = AssetNotForPersonsUnder7;
