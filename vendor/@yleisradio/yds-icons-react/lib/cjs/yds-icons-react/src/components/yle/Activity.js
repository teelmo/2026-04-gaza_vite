"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Activity = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Activity = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M9 2a1 1 0 0 1 .949.684L15 17.838l2.051-6.154A1 1 0 0 1 18 11h4a1 1 0 1 1 0 2h-3.28l-2.771 8.316a1 1 0 0 1-1.898 0L9 6.162l-2.051 6.154A1 1 0 0 1 6 13H2a1 1 0 1 1 0-2h3.28l2.77-8.316A1 1 0 0 1 9 2", clipRule: "evenodd" })] })));
};
exports.Activity = Activity;
