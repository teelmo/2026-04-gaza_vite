"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Globe = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Globe = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M12.015 23C18.083 22.992 23 18.07 23 12c0-6.075-4.925-11-11-11S1 5.925 1 12c0 6.07 4.917 10.992 10.985 11H12M9.726 3.29A9.01 9.01 0 0 0 3.055 11H7.05a16.3 16.3 0 0 1 2.676-7.71m4.548 0A16.3 16.3 0 0 1 16.95 11h3.995a9.01 9.01 0 0 0-6.67-7.71m.668 7.71A14.3 14.3 0 0 0 12 3.55 14.3 14.3 0 0 0 9.058 11zm-5.884 2h5.884A14.3 14.3 0 0 1 12 20.45 14.3 14.3 0 0 1 9.058 13M7.05 13H3.055a9.01 9.01 0 0 0 6.67 7.71A16.3 16.3 0 0 1 7.05 13m7.224 7.71A16.3 16.3 0 0 0 16.95 13h3.995a9.01 9.01 0 0 1-6.67 7.71", clipRule: "evenodd" })] })));
};
exports.Globe = Globe;
