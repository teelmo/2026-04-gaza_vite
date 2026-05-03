"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SportActive = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const SportActive = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "M22.61 9.12c-3.53-.14-6.7 1.37-8.23 4.02-1.58 2.73-1.24 6.36.8 9.39-1.01.3-2.07.47-3.18.47-5.17 0-9.48-3.56-10.67-8.35l.258.017c.24.017.476.033.712.033 3.34 0 6.31-1.52 7.77-4.05 1.56-2.7 1.24-6.29-.75-9.31C10.18 1.13 11.07 1 12 1c5.08 0 9.34 3.44 10.61 8.12m-6.5 5.02c1.22-2.11 3.89-3.26 6.85-3 .02.28.04.57.04.86 0 4.25-2.41 7.93-5.94 9.76-1.82-2.47-2.2-5.46-.95-7.62M7.4 2.04c1.82 2.47 2.18 5.46.94 7.61-1.25 2.15-4.02 3.33-7.06 2.99l-.26-.04C1 12.4 1 12.2 1 12 1 7.53 3.67 3.69 7.5 1.97z" })] })));
};
exports.SportActive = SportActive;
