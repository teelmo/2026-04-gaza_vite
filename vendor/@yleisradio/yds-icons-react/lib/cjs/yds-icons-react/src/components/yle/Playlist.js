"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Playlist = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Playlist = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "M3 4a1 1 0 0 0 0 2h15a1 1 0 1 0 0-2zM3 10.5a1 1 0 1 0 0 2h7a1 1 0 1 0 0-2zM2 18a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1M15.677 10.077l6.125 4.5c.128.1.198.25.198.425s-.07.338-.198.425l-6.125 4.5a.41.41 0 0 1-.444.013.49.49 0 0 1-.233-.437v-9.001c0-.188.093-.35.233-.438a.385.385 0 0 1 .444.013" })] })));
};
exports.Playlist = Playlist;
