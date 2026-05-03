"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VolumeHigh = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const VolumeHigh = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M12 5a1 1 0 0 0-1.625-.781L5.65 7.999H2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h3.65l4.725 3.782A1 1 0 0 0 12 19zM6.625 9.78 10 7.08v9.84l-3.375-2.701a1 1 0 0 0-.625-.22H3v-4h3a1 1 0 0 0 .625-.218m13.152-5.557a1 1 0 1 0-1.414 1.414 9 9 0 0 1 0 12.726 1 1 0 1 0 1.414 1.414 11 11 0 0 0 0-15.554m-3.53 3.53a1 1 0 1 0-1.414 1.414 4 4 0 0 1 0 5.656 1 1 0 1 0 1.414 1.414 6 6 0 0 0 0-8.484", clipRule: "evenodd" })] })));
};
exports.VolumeHigh = VolumeHigh;
