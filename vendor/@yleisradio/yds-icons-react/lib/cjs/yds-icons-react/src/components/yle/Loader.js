"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loader = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Loader = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "M13 2a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0zm6.777 3.637a1 1 0 0 0-1.414-1.414l-2.83 2.83a1 1 0 0 0 1.414 1.414zM1 12a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1m17-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zm-9.533 4.533a1 1 0 0 1 0 1.414l-2.83 2.83a1 1 0 0 1-1.414-1.414l2.83-2.83a1 1 0 0 1 1.414 0m8.48 0a1 1 0 0 0-1.414 1.414l2.83 2.83a1 1 0 0 0 1.414-1.414zM13 18a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0zM4.223 4.223a1 1 0 0 1 1.414 0l2.83 2.83a1 1 0 0 1-1.414 1.414l-2.83-2.83a1 1 0 0 1 0-1.414" })] })));
};
exports.Loader = Loader;
