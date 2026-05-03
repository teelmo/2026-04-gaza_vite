"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoOff = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const VideoOff = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M1.707.293A1 1 0 0 0 .293 1.707L2.61 4.025A3 3 0 0 0 0 7v10a3 3 0 0 0 3 3h11a3 3 0 0 0 2.76-1.825l5.533 5.532a1 1 0 0 0 1.414-1.414zM15 16.414 4.586 6H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1zM10.66 6H14a1 1 0 0 1 1 1v3.34a1 1 0 0 0 .293.707l1 1a1 1 0 0 0 1.293.103L22 8.958V17a1 1 0 1 0 2 0V7a1 1 0 0 0-1.586-.81l-5.31 3.84L17 9.926V7a3 3 0 0 0-3-3h-3.34a1 1 0 1 0 0 2", clipRule: "evenodd" })] })));
};
exports.VideoOff = VideoOff;
