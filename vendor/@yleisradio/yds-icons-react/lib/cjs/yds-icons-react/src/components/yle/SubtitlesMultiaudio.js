"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubtitlesMultiaudio = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const SubtitlesMultiaudio = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M4 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h3.76a1 1 0 0 1 .65.24l1.638 1.404a3 3 0 0 0 3.904 0l1.637-1.403a1 1 0 0 1 .65-.241H20a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zM3 6a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-3.76a3 3 0 0 0-1.952.722l-1.637 1.403a1 1 0 0 1-1.302 0l-1.636-1.403A3 3 0 0 0 7.76 19H4a1 1 0 0 1-1-1zm16 6a1 1 0 0 1-1 1h-7a1 1 0 1 1 0-2h7a1 1 0 0 1 1 1M8 12a1 1 0 0 1-1 1H6a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1m-3 4a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1m11 0a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1", clipRule: "evenodd" })] })));
};
exports.SubtitlesMultiaudio = SubtitlesMultiaudio;
