"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExternalLink = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const ExternalLink = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "M15 2a1 1 0 1 0 0 2h3.586l-9.293 9.293a1 1 0 1 0 1.414 1.414L20 5.414V9a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1zM5 7a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-6a1 1 0 0 1 2 0v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h6a1 1 0 1 1 0 2z" })] })));
};
exports.ExternalLink = ExternalLink;
