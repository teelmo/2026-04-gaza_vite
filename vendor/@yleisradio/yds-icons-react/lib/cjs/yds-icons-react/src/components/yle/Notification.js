"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notification = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Notification = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M12 1a7 7 0 0 0-7 7c0 3.353-.717 5.435-1.378 6.646a6 6 0 0 1-.88 1.244 3 3 0 0 1-.305.284l-.003.002A1 1 0 0 0 3 18h18a1 1 0 0 0 .566-1.824l-.003-.002-.052-.042a3 3 0 0 1-.254-.242 6 6 0 0 1-.88-1.244C19.718 13.435 19 11.353 19 8a7 7 0 0 0-7-7m6.85 15H5.15q.113-.187.228-.396C6.217 14.065 7 11.647 7 8a5 5 0 1 1 10 0c0 3.647.783 6.065 1.622 7.604q.114.21.229.396m-7.715 4.498a1 1 0 1 0-1.73 1.004 3 3 0 0 0 5.19 0 1 1 0 1 0-1.73-1.004 1 1 0 0 1-1.73 0", clipRule: "evenodd" })] })));
};
exports.Notification = Notification;
