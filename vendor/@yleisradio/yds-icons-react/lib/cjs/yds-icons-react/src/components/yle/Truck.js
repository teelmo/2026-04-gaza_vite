"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Truck = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Truck = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M1 2a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h1.337a3.5 3.5 0 1 0 6.326 0h6.674a3.5 3.5 0 1 0 6.326 0H23a1 1 0 0 0 1-1v-5a1 1 0 0 0-.293-.707l-3-3A1 1 0 0 0 20 7h-3V3a1 1 0 0 0-1-1zm16 7v6h5v-3.586L19.586 9zm-2-5H2v11h13zM5.5 17a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M17 18.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0", clipRule: "evenodd" })] })));
};
exports.Truck = Truck;
