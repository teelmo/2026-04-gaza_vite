"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stop = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Stop = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M4 4.774C4 4.347 4.347 4 4.774 4h14.452c.427 0 .774.347.774.774v14.452a.774.774 0 0 1-.774.774H4.774A.774.774 0 0 1 4 19.226z", clipRule: "evenodd" })] })));
};
exports.Stop = Stop;
