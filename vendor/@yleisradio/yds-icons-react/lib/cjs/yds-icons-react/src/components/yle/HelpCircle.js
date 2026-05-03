"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelpCircle = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const HelpCircle = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "M12.6 6.05c-.93-.16-1.89.02-2.7.49-.81.48-1.43 1.23-1.75 2.12-.18.52.09 1.09.61 1.28s1.09-.09 1.28-.61a2 2 0 0 1 2.22-1.31c.47.08.89.32 1.19.68s.47.82.47 1.29-.37.96-1.05 1.42a6 6 0 0 1-1.025.54l-.021.009-.124.051c-.03.01-.06.02-.07.03h-.02c-.52.18-.81.75-.63 1.27.17.52.74.81 1.26.63l.05-.02s.07-.02.12-.04l.06-.024q.135-.053.33-.136c.32-.14.74-.35 1.18-.64.81-.54 1.94-1.55 1.95-3.08 0-.94-.33-1.86-.94-2.58a4.02 4.02 0 0 0-2.38-1.37zM12.01 15.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M12 1C5.92 1 1 5.92 1 12s4.92 11 11 11 11-4.92 11-11S18.08 1 12 1m0 20a9 9 0 1 1 .001-18.001A9 9 0 0 1 12 21" })] })));
};
exports.HelpCircle = HelpCircle;
