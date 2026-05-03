"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Image = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "m20 15.414-2.793-2.793a1 1 0 0 0-1.34-.066l-.074.066L8.414 20H19a1 1 0 0 0 1-1zM10 9a1 1 0 1 0-2 0 1 1 0 0 0 2 0m10-4a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h.586l8.793-8.793.22-.2a3 3 0 0 1 4.022.2L20 12.586zm-8 4a3 3 0 1 1-6 0 3 3 0 0 1 6 0m10 10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3z" })] })));
};
exports.Image = Image;
