"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudSnow = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const CloudSnow = (_a) => {
    var { title = undefined, titleId = undefined, width = '25', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 25 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "M13.263 1.615A9 9 0 0 0 4.376 17.03a1 1 0 0 0 1.248-1.562A7 7 0 1 1 16.772 8.25a1 1 0 0 0 .968.75H19a4 4 0 0 1 1.599 7.664 1 1 0 1 0 .802 1.832A6 6 0 0 0 19.001 7h-.522a9 9 0 0 0-5.216-5.385M12 18a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H13a1 1 0 0 1-1-1m-3 1a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2zm7 1a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H17a1 1 0 0 1-1-1m-4 2a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H13a1 1 0 0 1-1-1m4-6a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H17a1 1 0 0 1-1-1m-7-1a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2z" })] })));
};
exports.CloudSnow = CloudSnow;
