"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EyeOff = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const EyeOff = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M1.707.293A1 1 0 0 0 .293 1.707l4.275 4.276a19.5 19.5 0 0 0-4.45 5.544 1 1 0 0 0-.012.92l.861-.43c-.861.43-.86.432-.86.432v.002l.004.007.011.022.04.078q.053.099.152.276a20.7 20.7 0 0 0 2.831 3.85C5.105 18.774 8.1 21 12 21h.016a11.07 11.07 0 0 0 5.81-1.76l4.467 4.467a1 1 0 0 0 1.414-1.414zm14.664 17.493-2.321-2.322a4 4 0 0 1-3.623.32A4 4 0 0 1 8.536 9.95L5.987 7.401a17.5 17.5 0 0 0-3.844 4.602 18.7 18.7 0 0 0 2.462 3.313c1.789 1.909 4.29 3.68 7.387 3.684a9.1 9.1 0 0 0 4.38-1.214m-6.343-6.344a2 2 0 0 0 2.53 2.53zm.1-6.228A8 8 0 0 1 11.998 5H12c3.1 0 5.605 1.774 7.395 3.684a18.7 18.7 0 0 1 2.463 3.314c-.517.9-1.114 1.753-1.783 2.548a1 1 0 0 0 1.53 1.288 19.5 19.5 0 0 0 2.277-3.363 1 1 0 0 0 .012-.918L23 12c.894-.447.894-.449.894-.449l-.002-.002-.003-.007-.011-.022a9 9 0 0 0-.192-.354 20.7 20.7 0 0 0-2.831-3.85C18.895 5.226 15.9 3 12 3a10 10 0 0 0-2.329.266 1 1 0 0 0 .456 1.948m11.895 6.785h-.044l-.121-.001zm.035 0h-.035zm.229 0h-.229zM22.5 12h-.213z", clipRule: "evenodd" })] })));
};
exports.EyeOff = EyeOff;
