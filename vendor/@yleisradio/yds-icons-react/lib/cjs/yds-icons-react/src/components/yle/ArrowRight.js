"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrowRight = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const ArrowRight = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "M12.707 4.293a1 1 0 1 0-1.414 1.414L16.586 11H4.875C4.392 11 4 11.448 4 12s.392 1 .875 1h11.71l-5.292 5.293a1 1 0 0 0 1.414 1.414l7-7a1 1 0 0 0 0-1.414z" })] })));
};
exports.ArrowRight = ArrowRight;
