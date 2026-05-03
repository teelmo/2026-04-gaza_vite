"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogoArenanStripeNegaOnDark = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const themeHelper_js_1 = require("../../helpers/themeHelper.js");
const LogoArenanStripeNegaOnDark = (_a) => {
    var { title = undefined, titleId = undefined, width = '326', height = '85', theme, colors } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "theme", "colors"]);
    if (!colors) {
        if (theme) {
            colors = (0, themeHelper_js_1.logoThemeColors)(theme);
        }
        else {
            colors = { LOGO_NEGA: '#fff', LOGO_AREENA: '#29CCDE' };
        }
    }
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 326 85", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: colors.LOGO_NEGA, d: "M32.66 22.588c.123-2.23 1.034-3.228 2.945-3.228h.002c1.816 0 2.632.966 2.716 3.224z" }), (0, jsx_runtime_1.jsx)("path", { fill: colors.LOGO_NEGA, d: "M48.274 2.377v43.548c0 1.186-1.03 2.226-2.157 2.226H2.527C1.304 48.149.275 47.11.275 45.922V2.377C.274 1.142 1.303.151 2.528.151h43.59c1.127 0 2.156.991 2.156 2.226M18.88 17.244h-.775c-.85 0-1.138.532-1.346 1.445l-2.161 9.396h-.37c-.796.027-1.158-.082-1.417-1.116l-2.188-8.29-.023-.093c-.167-.629-.354-1.344-1.227-1.344h-.819c-.747 0-1.174.41-1.174 1.127 0 .396.105.979.332 1.84l2.324 8.286c.43 1.622 1.35 2.346 2.983 2.346h1.006c-.132.695-.299 1.484-.4 1.802-.408 1.266-1.02 1.498-2.079 1.498-.934 0-1.542-.072-1.986-.124l-.038-.005a6 6 0 0 0-.663-.052c-.62 0-.99.387-.99 1.037v.547c0 .684.353.93.734 1.092.572.26 1.283.4 3.4.4 2.17 0 3.777-1.166 4.303-3.118.903-3.354 3.314-13.47 3.418-13.9.012-.045.286-1.123.286-1.646-.002-.674-.457-1.128-1.13-1.128m5.812-6.97h-1.957c-.358 0-1.448 0-1.448 1.082v.867c0 .339.15 1.126 1.538 1.126h.328v16.135c0 .922.213 1.494 1.265 1.494h.638c1.075 0 1.22-.755 1.22-1.494V12.543c0-.85 0-2.269-1.584-2.269m15.093 17.674c-.204 0-.41.04-.65.086l-.09.017c-.484.097-1.297.259-2.58.259-3.325 0-3.716-.562-3.821-3.165H39c1.466 0 2.12-.576 2.12-1.868 0-2.747-.576-6.402-5.565-6.402-4.213 0-6.092 2.288-6.092 7.416 0 5.006 1.75 6.868 6.458 6.868 1.957 0 3.506-.3 4.114-.579.387-.164.743-.41.743-1.096v-.5c-.003-.647-.373-1.036-.994-1.036" }), (0, jsx_runtime_1.jsx)("path", { fill: colors.LOGO_NEGA, fillRule: "evenodd", d: "m71.033.15-17.074 48h9.662l4.368-12.687h16.213l4.5 12.688h10.523L82.48.15zm5.294 9.627 5.89 18.457h-12.11zm208.317 38.374h9.33V16.24l24.553 31.91h7.081v-48h-9.398v30.362L293.38.15h-8.736zM113.716 24.45h10.654c4.567-1.926 6.684-4.382 6.684-9.361 0-5.179-3.706-7.237-9.794-7.237-3.839 0-7.544.664-7.544.664zm7.279 7.502 10.654 16.199H142.9l-12.442-17.926c4.368-1.925 10.456-6.174 10.456-16.066 0-9.693-7.411-14.008-19.787-14.008-10.787 0-16.809 1.66-16.809 1.66v46.34h9.398v-16.2zm27.461 16.199v-48h32.229v8.146H157.92v12.05h19.655v7.81H157.92v11.848h23.36v8.146zm39.838 0h9.33V16.24l24.552 31.91h7.081v-48h-9.397v30.362L197.028.15h-8.734zm68.359-38.374-6.22 18.457h12.11zm-8.338 25.686h16.214l4.499 12.688h10.522l-16.742-48h-11.449l-17.074 48h9.662z", clipRule: "evenodd" }), (0, jsx_runtime_1.jsx)("path", { fill: colors.LOGO_AREENA, d: "M107.067 72.151h106.55v12.05h-106.55z", opacity: 0.8 })] })));
};
exports.LogoArenanStripeNegaOnDark = LogoArenanStripeNegaOnDark;
