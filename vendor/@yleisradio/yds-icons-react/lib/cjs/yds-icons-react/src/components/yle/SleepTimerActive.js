"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SleepTimerActive = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const SleepTimerActive = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "M15.563 2.75a.813.813 0 0 0 0 1.625h2.733l-3.35 3.909a.813.813 0 0 0 .617 1.341h4.5a.813.813 0 0 0 0-1.625h-2.734l3.35-3.909a.812.812 0 0 0-.616-1.341zM9.787 4.61a.5.5 0 0 0-.64-.641A8.5 8.5 0 1 0 20.03 14.854a.5.5 0 0 0-.64-.64 7.5 7.5 0 0 1-9.604-9.605" })] })));
};
exports.SleepTimerActive = SleepTimerActive;
