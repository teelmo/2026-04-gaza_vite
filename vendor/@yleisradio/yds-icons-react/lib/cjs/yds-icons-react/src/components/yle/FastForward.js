"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FastForward = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const FastForward = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "M12.56 4.102a1 1 0 0 1 1.054.109l9 7a1 1 0 0 1 0 1.578l-9 7A1 1 0 0 1 12 19V5a1 1 0 0 1 .56-.898m-11 0a1 1 0 0 1 1.054.109l9 7a1 1 0 0 1 0 1.578l-9 7A1 1 0 0 1 1 19V5a1 1 0 0 1 .56-.898" })] })));
};
exports.FastForward = FastForward;
