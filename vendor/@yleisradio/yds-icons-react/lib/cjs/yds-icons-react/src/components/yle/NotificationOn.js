"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationOn = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const NotificationOn = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M7.05 3.05A7 7 0 0 1 19 8c0 3.353.717 5.435 1.378 6.646.332.608.655 1.007.88 1.244a3 3 0 0 0 .306.284l.002.002A1 1 0 0 1 21 18H3a1 1 0 0 1-.566-1.824l.003-.002.052-.042c.053-.044.141-.123.254-.242.224-.237.547-.636.88-1.244C4.282 13.435 5 11.353 5 8a7 7 0 0 1 2.05-4.95m2.718 17.085a1 1 0 0 1 1.367.363 1 1 0 0 0 1.73 0 1 1 0 1 1 1.73 1.004 3 3 0 0 1-5.19 0 1 1 0 0 1 .363-1.367", clipRule: "evenodd" })] })));
};
exports.NotificationOn = NotificationOn;
