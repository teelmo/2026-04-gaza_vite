"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Podcast = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Podcast = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M12 9a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5m-.5 2.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0m4 7.056C15.5 21.01 13.933 23 12 23s-3.5-1.99-3.5-4.444C8.5 16.1 8.5 15 12 15s3.5 1.101 3.5 3.556m-2 0C13.5 20.377 12.41 21 12 21s-1.5-.623-1.5-2.444c0-.653.003-1.047.04-1.35l.011-.08c.236-.064.675-.126 1.449-.126s1.213.062 1.449.126l.011.08c.037.303.04.697.04 1.35M3 11.382C3 6.488 7.018 2.5 12 2.5s9 3.988 9 8.882c0 2.075-.72 3.981-1.927 5.494a1 1 0 0 0 1.562 1.248A10.77 10.77 0 0 0 23 11.382C23 5.362 18.064.5 12 .5S1 5.361 1 11.382c0 2.546.885 4.89 2.365 6.742a1 1 0 0 0 1.562-1.248A8.77 8.77 0 0 1 3 11.382M12 6.5c-2.785 0-5 2.195-5 4.85 0 .957.285 1.849.78 2.601a1 1 0 1 1-1.673 1.098A6.7 6.7 0 0 1 5 11.35C5 7.543 8.158 4.5 12 4.5s7 3.043 7 6.85a6.7 6.7 0 0 1-1.107 3.699 1 1 0 0 1-1.672-1.098A4.7 4.7 0 0 0 17 11.35c0-2.655-2.215-4.85-5-4.85", clipRule: "evenodd" })] })));
};
exports.Podcast = Podcast;
