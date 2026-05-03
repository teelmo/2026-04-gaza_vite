"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HardDrive = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const HardDrive = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M16.76 3H7.24a3 3 0 0 0-2.685 1.664v.001l-3.44 6.87A1 1 0 0 0 1 12v6a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3v-6.038a1 1 0 0 0-.115-.428l-3.44-6.869v-.001A3 3 0 0 0 16.76 3m3.62 8-2.724-5.442-.002-.003A1 1 0 0 0 16.76 5H7.24a1 1 0 0 0-.894.555l-.002.003L3.62 11h16.762ZM3 13v5a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-5zm6 3a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H10a1 1 0 0 1-1-1m-3-1a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2z", clipRule: "evenodd" })] })));
};
exports.HardDrive = HardDrive;
