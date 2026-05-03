"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Import = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Import = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M8.529 4.022a6 6 0 0 1 6.223 4.264A1 1 0 0 0 15.71 9h1.79a3.5 3.5 0 0 1 1.945 6.41 1 1 0 1 0 1.11 1.664A5.5 5.5 0 0 0 17.5 7h-1.082a8 8 0 1 0-13.132 8.6 1 1 0 0 0 1.429-1.4A6 6 0 0 1 8.529 4.023M12 11a1 1 0 0 1 1 1v6.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L11 18.586V12a1 1 0 0 1 1-1", clipRule: "evenodd" })] })));
};
exports.Import = Import;
