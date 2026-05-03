"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Navigation2 = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Navigation2 = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M12 1a1 1 0 0 1 .938.654l7 19a1 1 0 0 1-1.434 1.214L12 18.152l-6.504 3.716a1 1 0 0 1-1.434-1.214l7-19A1 1 0 0 1 12 1M6.887 18.77l4.617-2.638a1 1 0 0 1 .992 0l4.617 2.638L12 4.893z", clipRule: "evenodd" })] })));
};
exports.Navigation2 = Navigation2;
