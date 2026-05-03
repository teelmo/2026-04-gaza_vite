"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Home = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Home = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "m21.61 8.21-9-7c-.36-.28-.87-.28-1.23 0l-8.99 7C2.15 8.4 2 8.69 2 9v11c0 .8.32 1.56.88 2.12S4.21 23 5 23h4c.55 0 1-.45 1-1v-9h4v9c0 .55.45 1 1 1h4c.8 0 1.56-.32 2.12-.88S22 20.79 22 20V9c0-.31-.14-.6-.39-.79M20 20c0 .27-.11.52-.29.71s-.44.29-.71.29h-3v-9c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v9H5c-.27 0-.52-.11-.71-.29A1 1 0 0 1 4 20V9.49l8-6.22 8 6.22z" })] })));
};
exports.Home = Home;
