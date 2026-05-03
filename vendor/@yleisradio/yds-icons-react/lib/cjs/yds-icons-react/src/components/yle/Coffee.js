"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coffee = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Coffee = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "M14 0c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1s-1-.45-1-1V1c0-.55.45-1 1-1M2 7c-.55 0-1 .45-1 1v9c0 1.33.52 2.6 1.46 3.54C3.4 21.47 4.67 22 6 22h8c1.33 0 2.6-.52 3.54-1.46C18.47 19.6 19 18.33 19 17c1.33 0 2.6-.52 3.54-1.46C23.47 14.6 24 13.33 24 12s-.52-2.6-1.46-3.54A5.04 5.04 0 0 0 19 7zm17 2c.79 0 1.56.32 2.12.88S22 11.21 22 12s-.32 1.56-.88 2.12S19.8 15 19 15zM3.88 19.12C3.32 18.56 3 17.8 3 17V9h14v8c0 .79-.32 1.56-.88 2.12S14.8 20 14 20H6c-.79 0-1.56-.32-2.12-.88M10 0c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1s-1-.45-1-1V1c0-.55.45-1 1-1M6 0c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1s-1-.45-1-1V1c0-.55.45-1 1-1" })] })));
};
exports.Coffee = Coffee;
