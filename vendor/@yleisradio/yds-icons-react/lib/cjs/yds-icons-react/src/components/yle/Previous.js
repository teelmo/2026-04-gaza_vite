"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Previous = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Previous = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M20 4a1 1 0 0 0-1.625-.78l-10 8a1 1 0 0 0 0 1.56l10 8A1 1 0 0 0 20 20zM6 5a1 1 0 0 0-2 0v14a1 1 0 1 0 2 0z", clipRule: "evenodd" })] })));
};
exports.Previous = Previous;
