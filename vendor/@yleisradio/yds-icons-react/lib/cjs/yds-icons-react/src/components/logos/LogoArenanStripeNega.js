"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogoArenanStripeNega = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const themeHelper_js_1 = require("../../helpers/themeHelper.js");
const LogoArenanStripeNega = (_a) => {
    var { title = undefined, titleId = undefined, width = '327', height = '85', theme, colors } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "theme", "colors"]);
    if (!colors) {
        if (theme) {
            colors = (0, themeHelper_js_1.logoThemeColors)(theme);
        }
        else {
            colors = { LOGO_NEGA: '#fff', LOGO_AREENA: '#29CCDE' };
        }
    }
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 327 85", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: colors.LOGO_NEGA, d: "M33.117 22.588c.122-2.23 1.033-3.228 2.944-3.228h.002c1.816 0 2.632.966 2.716 3.224z" }), (0, jsx_runtime_1.jsx)("path", { fill: colors.LOGO_NEGA, d: "M48.73 2.377v43.548c0 1.186-1.029 2.226-2.157 2.226H2.983C1.76 48.149.73 47.11.73 45.922V2.377C.73 1.142 1.759.151 2.984.151h43.59c1.127 0 2.156.991 2.156 2.226M19.336 17.244h-.775c-.85 0-1.138.532-1.346 1.445l-2.161 9.396h-.37c-.796.027-1.158-.082-1.417-1.116l-2.188-8.29-.024-.093c-.166-.629-.353-1.344-1.226-1.344H9.01c-.747 0-1.174.41-1.174 1.127 0 .396.105.979.332 1.84l2.324 8.286c.431 1.622 1.35 2.346 2.983 2.346h1.006c-.132.695-.299 1.484-.4 1.802-.408 1.266-1.02 1.498-2.079 1.498-.934 0-1.542-.072-1.986-.124l-.038-.005a6 6 0 0 0-.663-.052c-.62 0-.99.387-.99 1.037v.547c0 .684.353.93.734 1.092.572.26 1.283.4 3.4.4 2.17 0 3.777-1.166 4.303-3.118.903-3.354 3.314-13.47 3.418-13.9.012-.045.286-1.123.286-1.646-.002-.674-.457-1.128-1.13-1.128m5.812-6.97H23.19c-.358 0-1.448 0-1.448 1.082v.867c0 .339.15 1.126 1.538 1.126h.329v16.135c0 .922.212 1.494 1.264 1.494h.638c1.075 0 1.22-.755 1.22-1.494V12.543c0-.85 0-2.269-1.584-2.269M40.24 27.948c-.204 0-.41.04-.65.086l-.09.017a12 12 0 0 1-2.58.259c-3.325 0-3.716-.562-3.821-3.165h6.357c1.466 0 2.12-.576 2.12-1.868 0-2.747-.576-6.402-5.565-6.402-4.213 0-6.092 2.288-6.092 7.416 0 5.006 1.75 6.868 6.458 6.868 1.957 0 3.506-.3 4.114-.579.387-.164.743-.41.743-1.096v-.5c-.002-.647-.373-1.036-.994-1.036" }), (0, jsx_runtime_1.jsx)("path", { fill: colors.LOGO_NEGA, fillRule: "evenodd", d: "m71.489.15-17.074 48h9.662l4.368-12.687h16.213l4.5 12.688h10.523L82.938.15zm5.294 9.627 5.89 18.457h-12.11zM285.1 48.151h9.33V16.24l24.553 31.91h7.081v-48h-9.398v30.362L293.836.15H285.1zM114.172 24.45h10.654c4.567-1.926 6.684-4.382 6.684-9.361 0-5.179-3.705-7.237-9.794-7.237-3.839 0-7.544.664-7.544.664zm7.279 7.502 10.655 16.199h11.25l-12.442-17.926c4.368-1.925 10.456-6.174 10.456-16.066 0-9.693-7.411-14.008-19.787-14.008-10.787 0-16.809 1.66-16.809 1.66v46.34h9.398v-16.2zm27.461 16.199v-48h32.229v8.146h-22.765v12.05h19.655v7.81h-19.655v11.848h23.36v8.146zm39.838 0h9.33V16.24l24.552 31.91h7.081v-48h-9.397v30.362L197.484.15h-8.734zm68.359-38.374-6.22 18.457h12.11zm-8.338 25.686h16.214l4.499 12.688h10.522l-16.742-48h-11.449l-17.073 48h9.661z", clipRule: "evenodd" }), (0, jsx_runtime_1.jsx)("path", { fill: colors.LOGO_AREENA, d: "M107.523 72.151h106.55v12.05h-106.55z", opacity: 0.8 })] })));
};
exports.LogoArenanStripeNega = LogoArenanStripeNega;
