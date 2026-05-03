"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogoYleNega = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const themeHelper_js_1 = require("../../helpers/themeHelper.js");
const LogoYleNega = (_a) => {
    var { title = undefined, titleId = undefined, width = '48', height = '48', theme, colors } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "theme", "colors"]);
    if (!colors) {
        if (theme) {
            colors = (0, themeHelper_js_1.logoThemeColors)(theme);
        }
        else {
            colors = { LOGO_NEGA: '#fff' };
        }
    }
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 48 48", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsxs)("g", { fill: colors.LOGO_NEGA, clipPath: "url(#yle-nega__a)", children: [(0, jsx_runtime_1.jsx)("path", { d: "M48 2.226v43.548C48 46.96 46.971 48 45.843 48H2.253C1.03 47.998 0 46.96 0 45.772V2.226C0 .991 1.029 0 2.254 0h43.59C46.97 0 48 .991 48 2.226M18.606 17.093h-.775c-.85 0-1.138.532-1.346 1.445l-2.161 9.396h-.37c-.796.027-1.158-.082-1.417-1.115l-2.188-8.291-.024-.093c-.166-.629-.353-1.344-1.226-1.344H8.28c-.747 0-1.174.41-1.174 1.128 0 .395.105.978.333 1.839l2.323 8.286c.431 1.623 1.35 2.346 2.983 2.346h1.006c-.132.695-.298 1.484-.4 1.802-.408 1.266-1.02 1.498-2.078 1.498a15 15 0 0 1-1.987-.124l-.038-.004a6 6 0 0 0-.663-.053c-.62 0-.99.387-.99 1.037v.548c0 .683.353.93.734 1.092.572.258 1.283.4 3.4.4 2.17 0 3.777-1.166 4.303-3.12.903-3.353 3.314-13.468 3.418-13.9.012-.044.286-1.121.286-1.645-.002-.674-.457-1.128-1.13-1.128m5.812-6.97H22.46c-.358 0-1.448 0-1.448 1.082v.867c0 .339.15 1.126 1.538 1.126h.329v16.135c0 .922.212 1.494 1.264 1.494h.638c1.075 0 1.22-.755 1.22-1.494V12.392c0-.85 0-2.268-1.584-2.268M39.51 27.798c-.204 0-.41.04-.65.086l-.09.017c-.484.097-1.296.259-2.58.259-3.325 0-3.716-.562-3.821-3.165h6.357c1.466 0 2.12-.576 2.12-1.868 0-2.746-.576-6.401-5.565-6.401-4.213 0-6.092 2.287-6.092 7.415 0 5.006 1.75 6.868 6.458 6.868 1.957 0 3.506-.3 4.114-.578.387-.165.743-.41.743-1.097v-.5c-.002-.647-.373-1.036-.994-1.036" }), (0, jsx_runtime_1.jsx)("path", { d: "M32.387 22.437c.122-2.23 1.033-3.228 2.944-3.228h.002c1.816 0 2.632.966 2.716 3.224z" })] }), (0, jsx_runtime_1.jsx)("defs", { children: (0, jsx_runtime_1.jsx)("clipPath", { id: "yle-nega__a", children: (0, jsx_runtime_1.jsx)("path", { fill: colors.LOGO_NEGA, d: "M0 0h48v48H0z" }) }) })] })));
};
exports.LogoYleNega = LogoYleNega;
