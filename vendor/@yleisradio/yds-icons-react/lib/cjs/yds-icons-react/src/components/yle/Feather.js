"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Feather = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Feather = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M11.043 3.043a7.003 7.003 0 0 1 9.905 9.903v.001l-2.654 2.662q-.08.103-.183.183l-3.903 3.914A1 1 0 0 1 13.5 20H5.414l-2.707 2.707a1 1 0 0 1-1.414-1.414L4 18.586V10.5a1 1 0 0 1 .293-.707zM17.073 14l2.459-2.466v-.001a5.003 5.003 0 0 0-7.075-7.076L6 10.914v5.672l9.293-9.293a1 1 0 1 1 1.414 1.414L11.414 14zm-7.659 2h5.665l-1.994 2h-5.67l2-2Z", clipRule: "evenodd" })] })));
};
exports.Feather = Feather;
