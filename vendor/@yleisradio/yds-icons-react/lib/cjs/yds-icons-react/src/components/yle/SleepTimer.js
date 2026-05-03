"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SleepTimer = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const SleepTimer = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M10.377 3.378a1.5 1.5 0 0 0-1.57-.35A9.5 9.5 0 1 0 20.97 15.194a1.5 1.5 0 0 0-1.92-1.921 6.5 6.5 0 0 1-8.324-8.324 1.5 1.5 0 0 0-.35-1.57M7.45 6.029a7.5 7.5 0 0 1 1.088-.7 8.498 8.498 0 0 0 10.133 10.133 7.504 7.504 0 0 1-8.266 3.821A7.5 7.5 0 0 1 7.451 6.028m8.111-3.278a.813.813 0 0 0 0 1.625h2.734l-3.35 3.909a.813.813 0 0 0 .617 1.341h4.5a.813.813 0 0 0 0-1.625h-2.734l3.35-3.909a.812.812 0 0 0-.616-1.341z", clipRule: "evenodd" })] })));
};
exports.SleepTimer = SleepTimer;
