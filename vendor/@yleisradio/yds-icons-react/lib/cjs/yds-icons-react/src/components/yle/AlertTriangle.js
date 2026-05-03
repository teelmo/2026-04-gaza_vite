"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertTriangle = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const AlertTriangle = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M10.528 2.283a3 3 0 0 1 4.037 1.058l.003.005 8.47 14.14.008.014a3 3 0 0 1-2.565 4.5H3.519a3 3 0 0 1-2.565-4.5l.008-.014L9.435 3.341a3 3 0 0 1 1.093-1.058M12 3.897a1 1 0 0 0-.854.48L2.683 18.506A1 1 0 0 0 3.536 20h16.928a1 1 0 0 0 .853-1.494L12.855 4.379l-.001-.002a1 1 0 0 0-.854-.48M12 8a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1m-1.25 9c0-.69.56-1.25 1.25-1.25h.01a1.25 1.25 0 0 1 0 2.5H12c-.69 0-1.25-.56-1.25-1.25", clipRule: "evenodd" })] })));
};
exports.AlertTriangle = AlertTriangle;
