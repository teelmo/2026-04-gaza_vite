"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Interactive = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Interactive = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "m18.264 12.94-3.24-1.62c1.29-1 2.12-2.56 2.12-4.32 0-3.03-2.47-5.5-5.5-5.5a5.51 5.51 0 0 0-5.5 5.5c0 2.13 1.22 3.98 3 4.89v3.26l-1.84-.39-.1-.02c-.1-.02-.2-.03-.32-.03-.53 0-1.03.21-1.41.59l-1.4 1.42 5.09 5.09c.43.44 1.03.69 1.65.69h6.3c.98 0 1.81-.7 1.97-1.67l.8-4.71c.22-1.3-.43-2.58-1.62-3.18m-.35 2.85-.8 4.71h-6.3c-.09 0-.17-.04-.24-.1l-3.68-3.68 4.25.89V7c0-.28.22-.5.5-.5s.5.22.5.5v6h1.76l3.46 1.73c.4.2.62.63.55 1.06M11.644 3.5c-1.93 0-3.5 1.57-3.5 3.5 0 .95.38 1.81 1 2.44V7a2.501 2.501 0 0 1 5 0v2.44c.62-.63 1-1.49 1-2.44 0-1.93-1.57-3.5-3.5-3.5", clipRule: "evenodd" })] })));
};
exports.Interactive = Interactive;
