"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scissors = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Scissors = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M9.446 8.032a4 4 0 1 0-1.414 1.414L10.586 12l-2.554 2.554a4 4 0 1 0 1.414 1.414l11.261-11.26a1 1 0 0 0-1.414-1.415L12 10.586zM6 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4m0 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7.762-2.226a1 1 0 0 1 1.414-.002l5.53 5.52a1 1 0 1 1-1.412 1.416l-5.53-5.52a1 1 0 0 1-.002-1.415Z", clipRule: "evenodd" })] })));
};
exports.Scissors = Scissors;
