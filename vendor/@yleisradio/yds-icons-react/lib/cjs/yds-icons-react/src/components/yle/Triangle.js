"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Triangle = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Triangle = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M10.528 2.283a3 3 0 0 1 4.037 1.058l.003.005 8.47 14.14.008.014a3 3 0 0 1-2.565 4.5H3.519a3 3 0 0 1-2.565-4.5l.008-.014 8.47-14.14.858.514-.855-.519a3 3 0 0 1 1.093-1.058m.618 2.094L2.683 18.506A1 1 0 0 0 3.536 20h16.928a1 1 0 0 0 .853-1.494L12.855 4.379l-.001-.002a1 1 0 0 0-1.708 0", clipRule: "evenodd" })] })));
};
exports.Triangle = Triangle;
