"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Codesandbox = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Codesandbox = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M12 1.002a3 3 0 0 0-1.498.4L7.306 3.23a1 1 0 0 0-.554.316L3.504 5.402l-.004.002a3 3 0 0 0-.937.848 1 1 0 0 0-.25.414A3 3 0 0 0 2 8v8a3 3 0 0 0 1.5 2.595l.004.002 3.249 1.857a1 1 0 0 0 .554.316l3.193 1.825.002.001a3 3 0 0 0 1.022.363 1 1 0 0 0 .952 0 3 3 0 0 0 1.022-.363l.002-.001 3.193-1.825a1 1 0 0 0 .554-.316l3.25-1.857.003-.002A3 3 0 0 0 22 16V7.999a3 3 0 0 0-.314-1.334 1 1 0 0 0-.249-.413 3 3 0 0 0-.937-.848l-3.253-1.859a1 1 0 0 0-.553-.316L13.5 1.404l-.002-.001A3 3 0 0 0 12 1.002m2.44 3.243-1.94-1.11a1 1 0 0 0-1 0l-.004.003L9.56 4.245 12 5.655l2.442-1.41ZM7.55 5.393 5.038 6.828l6.96 4.027 6.962-4.027-2.51-1.435-3.95 2.283a1 1 0 0 1-1.001 0zM15.5 19.15 13 20.578v-7.991l7-4.05v2.886l-4 2.311a1 1 0 0 0-.5.866zM11 20.578v-7.991l-7-4.05v2.886l4 2.311a1 1 0 0 1 .5.866v4.55zM4 16v-2.266l2.5 1.444v2.83l-2-1.143-.002-.001A1 1 0 0 1 4 15.999Zm13.5 2.008 2-1.143.002-.001A1 1 0 0 0 20 16v-2.266l-2.5 1.444z", clipRule: "evenodd" })] })));
};
exports.Codesandbox = Codesandbox;
