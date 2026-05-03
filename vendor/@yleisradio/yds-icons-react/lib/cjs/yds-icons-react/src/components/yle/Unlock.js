"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Unlock = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Unlock = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "M15.559 2.164a6 6 0 0 1 2.321 3.637 1 1 0 1 1-1.96.398 4 4 0 0 0-7.914.572L8 7l-.001 3H19a3 3 0 0 1 2.995 2.824L22 13v7a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-7a3 3 0 0 1 3-3h.999L6 7a6 6 0 0 1 9.559-4.836M19 12H5a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1" })] })));
};
exports.Unlock = Unlock;
