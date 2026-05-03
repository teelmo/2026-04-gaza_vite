"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MicOff = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const MicOff = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '25', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 25", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M.293 1.293a1 1 0 0 1 1.32-.083l.094.083L17.495 17.08a1 1 0 0 1 .374.374l5.838 5.838a1 1 0 0 1-1.32 1.497l-.094-.083-5.359-5.359A8 8 0 0 1 13 20.988V23h3a1 1 0 0 1 .117 1.993L16 25H8a1 1 0 0 1-.117-1.993L8 23h3v-2.012a8 8 0 0 1-6.996-7.671L4 13v-2a1 1 0 0 1 1.993-.117L6 11v2.007a6 6 0 0 0 5.706 6.037 1 1 0 0 1 .588 0 6 6 0 0 0 3.212-1.124l-1.476-1.476a4 4 0 0 1-3.56.25A4 4 0 0 1 8 13v-2.586L.293 2.707a1 1 0 0 1 0-1.414m9.706 11.121 2.515 2.515-.124.03A2 2 0 0 1 10 13zm2.403-11.397A4 4 0 0 0 8.08 4.201a1 1 0 0 0 1.96.398l.045-.18A2 2 0 0 1 14 5v5.341l.007.117A1 1 0 0 0 16 10.34V5l-.006-.228a4 4 0 0 0-3.592-3.755M19 10a1 1 0 0 1 .993.883L20 11v2q0 .71-.126 1.407a1 1 0 0 1-1.968-.354q.07-.39.088-.789L18 13v-2a1 1 0 0 1 1-1", clipRule: "evenodd" })] })));
};
exports.MicOff = MicOff;
