"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoFeedActive = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const VideoFeedActive = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M5 1a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm4.55 8.895v4.21a.8.8 0 0 0 1.158.716l4.211-2.105a.8.8 0 0 0 0-1.431l-4.211-2.106a.8.8 0 0 0-1.158.716", clipRule: "evenodd" })] })));
};
exports.VideoFeedActive = VideoFeedActive;
