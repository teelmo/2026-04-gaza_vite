"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeActive = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const HomeActive = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "M12.614 1.21a1 1 0 0 0-1.228 0l-9 7A1 1 0 0 0 2 9v11a3 3 0 0 0 3 3h3.5c.5 0 1-.5 1-1v-8a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v8c0 .5.5 1 1 1H19a3 3 0 0 0 3-3V9a1 1 0 0 0-.386-.79z" })] })));
};
exports.HomeActive = HomeActive;
