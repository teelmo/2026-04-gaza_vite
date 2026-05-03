"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeaturedActive = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const FeaturedActive = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "M12 1a1 1 0 0 1 .897.557l2.857 5.79 6.39.934a1 1 0 0 1 .554 1.705l-4.623 4.503 1.09 6.362a1 1 0 0 1-1.45 1.054L12 18.9l-5.715 3.005a1 1 0 0 1-1.45-1.054l1.09-6.362-4.623-4.503a1 1 0 0 1 .553-1.705l6.39-.935 2.858-5.789A1 1 0 0 1 12 1" })] })));
};
exports.FeaturedActive = FeaturedActive;
