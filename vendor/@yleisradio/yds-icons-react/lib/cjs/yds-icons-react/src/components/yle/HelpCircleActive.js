"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelpCircleActive = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const HelpCircleActive = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12m11.258-3.976a2 2 0 0 0-2.224 1.308 1 1 0 0 1-1.887-.664 4 4 0 0 1 7.773 1.333c0 1.53-1.135 2.54-1.945 3.081a8 8 0 0 1-1.686.848l-.05.018h-.003a1 1 0 0 1-.633-1.896l.016-.006.074-.027a6 6 0 0 0 1.172-.6c.69-.46 1.055-.95 1.055-1.419v-.002a2 2 0 0 0-1.662-1.974M12 15.75a1.25 1.25 0 1 0 0 2.5h.01a1.25 1.25 0 1 0 0-2.5z", clipRule: "evenodd" })] })));
};
exports.HelpCircleActive = HelpCircleActive;
