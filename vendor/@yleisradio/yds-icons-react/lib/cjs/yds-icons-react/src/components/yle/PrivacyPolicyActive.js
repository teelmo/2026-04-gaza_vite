"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrivacyPolicyActive = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const PrivacyPolicyActive = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M12.351 1.064a1 1 0 0 0-.702 0l-8 3A1 1 0 0 0 3 5v7c0 3.446 2.282 6.2 4.342 8.003a22.7 22.7 0 0 0 4.103 2.836l.076.04.022.01.006.004.003.001c.282.14.614.141.895 0l.004-.001.006-.004.022-.01a8 8 0 0 0 .35-.188 22.7 22.7 0 0 0 3.83-2.689C18.719 18.2 21 15.447 21 12V5a1 1 0 0 0-.649-.936zm4.322 8.676a1 1 0 1 0-1.346-1.48L10.5 12.65l-1.827-1.662a1 1 0 1 0-1.346 1.48l2.5 2.273a1 1 0 0 0 1.346 0z", clipRule: "evenodd" })] })));
};
exports.PrivacyPolicyActive = PrivacyPolicyActive;
