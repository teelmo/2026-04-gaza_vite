"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shuffle = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Shuffle = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "M15 3a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V5.414L4.707 20.707a1 1 0 1 1-1.414-1.414L18.586 4H16a1 1 0 0 1-1-1m6 12a1 1 0 0 0-1 1v2.586l-4.293-4.293a1 1 0 0 0-1.414 1.414L18.586 20H16a1 1 0 1 0 0 2h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1M4.707 3.293a1 1 0 0 0-1.414 1.414l5 5a1 1 0 0 0 1.414-1.414z" })] })));
};
exports.Shuffle = Shuffle;
