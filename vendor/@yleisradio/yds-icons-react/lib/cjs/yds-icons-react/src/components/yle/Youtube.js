"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Youtube = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Youtube = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "M22.54 6.482a2.75 2.75 0 0 0-1.945-1.943C18.88 4.08 12 4.08 12 4.08s-6.88 0-8.595.46A2.75 2.75 0 0 0 1.46 6.481C1 8.195 1 11.77 1 11.77s0 3.575.46 5.288c.253.946.998 1.66 1.945 1.912 1.715.459 8.595.459 8.595.459s6.88 0 8.595-.46c.947-.252 1.692-.965 1.945-1.91.46-1.714.46-5.289.46-5.289s0-3.575-.46-5.288M9.75 15.016V8.524l5.75 3.246z" })] })));
};
exports.Youtube = Youtube;
