"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BatteryCharging = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const BatteryCharging = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "M3 7a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2a1 1 0 1 1 0 2H3a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h3.19a1 1 0 0 1 0 2zm11-1a1 1 0 0 1 1-1h2a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-3.19a1 1 0 1 1 0-2H17a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-2a1 1 0 0 1-1-1m9 4a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1M11.832 6.555a1 1 0 0 0-1.664-1.11l-4 6A1 1 0 0 0 7 13h4.132l-2.964 4.445a1 1 0 0 0 1.664 1.11l4-6A1 1 0 0 0 13 11H8.869z" })] })));
};
exports.BatteryCharging = BatteryCharging;
