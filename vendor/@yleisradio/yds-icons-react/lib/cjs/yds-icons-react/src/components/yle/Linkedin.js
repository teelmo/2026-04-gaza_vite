"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Linkedin = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Linkedin = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "M2.4 4.704a2.305 2.305 0 0 1 4.608 0c0 1.272-1.032 2.328-2.304 2.328S2.4 5.976 2.4 4.704m14.424 3.768c4.032 0 4.776 2.615 4.776 6.096l.145 5.984a1 1 0 0 1-1 1.024h-2.13a1 1 0 0 1-1-1v-5.24c0-1.488-.023-3.384-2.063-3.384-2.064 0-2.376 1.608-2.376 3.288v5.36a1 1 0 0 1-1 1h-1.984a1 1 0 0 1-1-1V9.784a1 1 0 0 1 1-1h1.816a1 1 0 0 1 1 1v.752h.048c.528-1.008 1.824-2.064 3.768-2.064M2.712 9.784a1 1 0 0 1 1-1h1.984a1 1 0 0 1 1 1V20.6a1 1 0 0 1-1 1H3.712a1 1 0 0 1-1-1z" })] })));
};
exports.Linkedin = Linkedin;
