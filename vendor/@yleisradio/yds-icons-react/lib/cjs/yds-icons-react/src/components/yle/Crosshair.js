"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Crosshair = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Crosshair = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m-1 2.055A9.004 9.004 0 0 0 3.055 11H6a1 1 0 1 1 0 2H3.055A9.004 9.004 0 0 0 11 20.945V18a1 1 0 1 1 2 0v2.945A9.004 9.004 0 0 0 20.945 13H18a1 1 0 1 1 0-2h2.945A9.004 9.004 0 0 0 13 3.055V6a1 1 0 1 1-2 0z", clipRule: "evenodd" })] })));
};
exports.Crosshair = Crosshair;
