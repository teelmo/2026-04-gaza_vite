"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sort = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Sort = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M12.417 5.633a.5.5 0 0 0-.834 0L9.047 9.475a.5.5 0 0 0 .418.775h5.07a.5.5 0 0 0 .418-.775zm-.834 12.735a.5.5 0 0 0 .834 0l2.536-3.842a.5.5 0 0 0-.418-.776h-5.07a.5.5 0 0 0-.418.776z", clipRule: "evenodd" })] })));
};
exports.Sort = Sort;
