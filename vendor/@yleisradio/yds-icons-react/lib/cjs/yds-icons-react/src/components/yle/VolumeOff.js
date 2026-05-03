"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VolumeOff = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const VolumeOff = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M12 5a1 1 0 0 0-1.625-.78L5.65 8H2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h3.65l4.725 3.78A1 1 0 0 0 12 19zM6.625 9.78 10 7.08v9.84l-3.375-2.7A1 1 0 0 0 6 14H3v-4h3a1 1 0 0 0 .625-.22m17.082-1.487a1 1 0 0 1 0 1.414L21.414 12l2.293 2.293a1 1 0 0 1-1.414 1.414L20 13.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L18.586 12l-2.293-2.293a1 1 0 0 1 1.414-1.414L20 10.586l2.293-2.293a1 1 0 0 1 1.414 0", clipRule: "evenodd" })] })));
};
exports.VolumeOff = VolumeOff;
