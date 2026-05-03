"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogoArenanStripeOnDark = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const themeHelper_js_1 = require("../../helpers/themeHelper.js");
const LogoArenanStripeOnDark = (_a) => {
    var { title = undefined, titleId = undefined, width = '326', height = '85', theme, colors } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "theme", "colors"]);
    if (!colors) {
        if (theme) {
            colors = (0, themeHelper_js_1.logoThemeColors)(theme);
        }
        else {
            colors = { LOGO_BACKGROUND: '#fff', LOGO_TEXT: '#000', LOGO_AREENA: '#29CCDE' };
        }
    }
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 326 85", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: colors.LOGO_BACKGROUND, d: "M48.274 2.326v43.548c0 1.188-1.028 2.226-2.156 2.226H2.528c-1.225 0-2.254-1.038-2.254-2.226V2.326C.274 1.091 1.303.101 2.528.101h43.59c1.128 0 2.156.99 2.156 2.225" }), (0, jsx_runtime_1.jsx)("path", { fill: colors.LOGO_TEXT, fillRule: "evenodd", d: "M22.733 10.225h1.958c1.585 0 1.585 1.42 1.585 2.268v16.945c0 .738-.144 1.493-1.22 1.493h-.638c-1.053 0-1.265-.572-1.265-1.493V13.3h-.33c-1.386 0-1.536-.788-1.536-1.127v-.867c0-1.082 1.088-1.082 1.446-1.082m16.405 17.762c.238-.047.444-.087.648-.087.62 0 .99.387.99 1.036v.5c0 .686-.356.933-.743 1.097-.607.278-2.156.58-4.114.58-4.707 0-6.457-1.862-6.457-6.868 0-5.129 1.879-7.415 6.093-7.415 4.989 0 5.565 3.653 5.565 6.4 0 1.292-.654 1.869-2.12 1.869h-6.356c.104 2.6.495 3.165 3.82 3.165 1.286 0 2.097-.162 2.581-.26zm-20.26-10.792h-.773c-.851 0-1.138.53-1.347 1.448l-2.16 9.392h-.372c-.796.029-1.157-.08-1.416-1.113l-2.187-8.292-.024-.09c-.166-.63-.354-1.345-1.227-1.345h-.82c-.746 0-1.174.41-1.174 1.127 0 .395.106.979.333 1.84l2.324 8.285c.431 1.623 1.351 2.347 2.982 2.347h1.007c-.133.694-.299 1.484-.4 1.8-.408 1.268-1.02 1.5-2.08 1.5-.93 0-1.536-.072-1.98-.123l-.044-.006-.012-.001a6 6 0 0 0-.651-.052c-.621 0-.992.388-.992 1.038v.546c0 .685.355.93.735 1.092.572.26 1.283.4 3.4.4 2.169 0 3.778-1.165 4.304-3.119.903-3.353 3.314-13.469 3.417-13.9.011-.046.286-1.123.286-1.647 0-.674-.454-1.127-1.128-1.127m16.725 2.115c-1.91 0-2.822.998-2.943 3.228l5.662-.005c-.084-2.257-.903-3.223-2.719-3.223", clipRule: "evenodd" }), (0, jsx_runtime_1.jsx)("path", { fill: colors.LOGO_BACKGROUND, fillRule: "evenodd", d: "m71.033.1-17.074 48h9.662l4.368-12.687h16.213l4.5 12.688h10.523L82.48.1zm5.294 9.627 5.89 18.457h-12.11zM284.644 48.1h9.33V16.19l24.553 31.91h7.081V.1h-9.398v30.363L293.38.1h-8.736zM113.716 24.4h10.654c4.567-1.926 6.684-4.382 6.684-9.361 0-5.18-3.706-7.237-9.794-7.237-3.839 0-7.544.664-7.544.664zm7.279 7.501 10.654 16.2H142.9l-12.442-17.926c4.368-1.925 10.456-6.174 10.456-16.066C140.914 4.416 133.503.1 121.127.1c-10.787 0-16.809 1.66-16.809 1.66V48.1h9.398V31.9zm27.461 16.2V.1h32.229v8.145H157.92v12.051h19.655v7.81H157.92v11.848h23.36V48.1zm39.838 0h9.33V16.19l24.552 31.91h7.081V.1h-9.397v30.362L197.028.1h-8.734zm68.359-38.374-6.22 18.457h12.11zm-8.338 25.686h16.214l4.499 12.688h10.522L262.808.1h-11.449l-17.074 48h9.662z", clipRule: "evenodd" }), (0, jsx_runtime_1.jsx)("path", { fill: colors.LOGO_AREENA, d: "M107.067 72.101h106.55v12.05h-106.55z", opacity: 0.8 })] })));
};
exports.LogoArenanStripeOnDark = LogoArenanStripeOnDark;
