"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Date = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Date = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M16 1a1 1 0 0 1 1 1v1h2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h2V2a1 1 0 0 1 2 0v1h6V2a1 1 0 0 1 1-1M7 5v1a1 1 0 0 0 2 0V5h6v1a1 1 0 1 0 2 0V5h2a1 1 0 0 1 1 1v3H4V6a1 1 0 0 1 1-1zm13 6v9a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9z", clipRule: "evenodd" })] })));
};
exports.Date = Date;
