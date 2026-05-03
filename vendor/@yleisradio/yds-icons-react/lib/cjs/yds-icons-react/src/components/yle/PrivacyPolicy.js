"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrivacyPolicy = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const PrivacyPolicy = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M12.351 1.064a1 1 0 0 0-.702 0l-8 3A1 1 0 0 0 3 5.003v7.002c0 3.448 2.282 6.203 4.342 8.006a22.7 22.7 0 0 0 4.103 2.837c.381.2.716.207 1.11 0q.098-.051.273-.147a22.7 22.7 0 0 0 3.83-2.69C18.719 18.207 21 15.452 21 12.004V5.002a1 1 0 0 0-.649-.937zm.369 19.377c-.283.177-.528.32-.72.43a20.7 20.7 0 0 1-3.341-2.366C6.719 16.804 5 14.558 5 12.004v-6.31l7-2.626 7 2.626v6.31c0 2.554-1.718 4.8-3.658 6.5-.95.83-1.904 1.486-2.622 1.936m4.02-12.114a1 1 0 0 1-.067 1.413l-5.5 5a1 1 0 0 1-1.346 0l-2.5-2.273a1 1 0 1 1 1.346-1.48L10.5 12.65l4.827-4.389a1 1 0 0 1 1.413.067", clipRule: "evenodd" })] })));
};
exports.PrivacyPolicy = PrivacyPolicy;
