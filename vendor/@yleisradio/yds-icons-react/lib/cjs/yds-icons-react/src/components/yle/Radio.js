"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Radio = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Radio = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6m-1 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0M5.637 5.637a1 1 0 1 0-1.414-1.414 11 11 0 0 0 0 15.554 1 1 0 0 0 1.414-1.414 9 9 0 0 1 0-12.726m14.14-1.414a1 1 0 1 0-1.414 1.414 9 9 0 0 1 0 12.726 1 1 0 1 0 1.414 1.414 11 11 0 0 0 0-15.554M8.467 8.458a1 1 0 1 0-1.414-1.415 7 7 0 0 0 0 9.905 1 1 0 0 0 1.414-1.415 5 5 0 0 1 0-7.075m8.48-1.405a1 1 0 1 0-1.414 1.415 5 5 0 0 1 0 7.075 1 1 0 1 0 1.414 1.415 7 7 0 0 0 0-9.905", clipRule: "evenodd" })] })));
};
exports.Radio = Radio;
