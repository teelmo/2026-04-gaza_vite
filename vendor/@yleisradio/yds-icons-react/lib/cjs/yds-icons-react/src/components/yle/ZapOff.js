"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZapOff = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const ZapOff = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M1.707.293A1 1 0 0 0 .293 1.707l6.354 6.354-4.415 5.299A1 1 0 0 0 3 15h7.867l-.86 6.876a1 1 0 0 0 1.761.764l4.3-5.159 6.225 6.226a1 1 0 0 0 1.414-1.414L16.715 15.3l-.014-.015-7.986-7.984-.014-.015zm6.36 9.188L5.135 13h6.45zm4.894 4.894-.546 4.365 2.232-2.679zm.437-13.293a1 1 0 0 1 .595 1.041l-.59 4.75a1 1 0 0 1-1.985-.246l.17-1.366-.25.299a1 1 0 1 1-1.537-1.28l2.43-2.92a1 1 0 0 1 1.167-.278M15.66 9a1 1 0 1 0 0 2h3.202l-1.06 1.269a1 1 0 0 0 1.535 1.282l2.43-2.91A1 1 0 0 0 21 9z", clipRule: "evenodd" })] })));
};
exports.ZapOff = ZapOff;
