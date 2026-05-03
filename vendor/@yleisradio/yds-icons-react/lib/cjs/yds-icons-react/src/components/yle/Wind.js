"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wind = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Wind = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M11.202 5.019a1 1 0 0 0-.903.276 1 1 0 1 1-1.418-1.41A3 3 0 1 1 10.998 9h-.002L11 8v1H2a1 1 0 1 1 0-2h9.004a1 1 0 0 0 .198-1.981m8.587 3.01a1.5 1.5 0 0 0-1.353.409 1 1 0 1 1-1.412-1.416A3.5 3.5 0 1 1 19.502 13H2a1 1 0 1 1 0-2h17.499a1.5 1.5 0 0 0 .29-2.971M13.998 15a3 3 0 1 1-2.117 5.115 1 1 0 1 1 1.418-1.41A1 1 0 1 0 14.004 17H2a1 1 0 1 1 0-2z", clipRule: "evenodd" })] })));
};
exports.Wind = Wind;
