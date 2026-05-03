"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Twitch = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Twitch = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M2 2a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v12a1 1 0 0 1-.293.707l-4 4A1 1 0 0 1 17 19h-4.586l-3.707 3.707A1 1 0 0 1 7 22v-3H3a1 1 0 0 1-1-1zm2 1v14h4a1 1 0 0 1 1 1v1.586l2.293-2.293A1 1 0 0 1 12 17h4.586L20 13.586V3zm7 3a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1m5 0a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1", clipRule: "evenodd" })] })));
};
exports.Twitch = Twitch;
