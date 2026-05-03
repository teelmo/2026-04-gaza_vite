"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogoAreenaStripeOnDark = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const themeHelper_js_1 = require("../../helpers/themeHelper.js");
const LogoAreenaStripeOnDark = (_a) => {
    var { title = undefined, titleId = undefined, width = '321', height = '85', theme, colors } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "theme", "colors"]);
    if (!colors) {
        if (theme) {
            colors = (0, themeHelper_js_1.logoThemeColors)(theme);
        }
        else {
            colors = { LOGO_BACKGROUND: '#fff', LOGO_TEXT: '#000', LOGO_AREENA: '#29CCDE' };
        }
    }
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 321 85", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: colors.LOGO_BACKGROUND, d: "M48.274 2.226v43.547c0 1.188-1.028 2.227-2.156 2.227H2.528C1.303 48 .274 46.96.274 45.773V2.226C.274.99 1.303 0 2.528 0h43.59c1.128 0 2.156.99 2.156 2.226" }), (0, jsx_runtime_1.jsx)("path", { fill: colors.LOGO_TEXT, fillRule: "evenodd", d: "M22.733 10.124h1.958c1.585 0 1.585 1.42 1.585 2.268v16.945c0 .738-.144 1.493-1.22 1.493h-.638c-1.053 0-1.265-.571-1.265-1.493V13.2h-.33c-1.386 0-1.536-.788-1.536-1.127v-.867c0-1.082 1.088-1.082 1.446-1.082m16.405 17.762c.238-.047.444-.087.648-.087.62 0 .99.387.99 1.037v.499c0 .687-.356.933-.743 1.097-.607.279-2.156.58-4.114.58-4.707 0-6.457-1.862-6.457-6.868 0-5.128 1.879-7.415 6.093-7.415 4.989 0 5.565 3.653 5.565 6.4 0 1.293-.654 1.869-2.12 1.869h-6.356c.104 2.6.495 3.165 3.82 3.165 1.286 0 2.097-.162 2.581-.259zm-20.26-10.791h-.773c-.851 0-1.138.53-1.347 1.447l-2.16 9.393h-.372c-.796.028-1.157-.081-1.416-1.114l-2.187-8.291-.024-.091c-.166-.63-.354-1.344-1.227-1.344h-.82c-.746 0-1.174.41-1.174 1.127 0 .394.106.978.333 1.84l2.324 8.285c.431 1.622 1.351 2.346 2.982 2.346h1.007c-.133.694-.299 1.485-.4 1.801-.408 1.267-1.02 1.499-2.08 1.499-.93 0-1.536-.071-1.98-.123l-.044-.005-.012-.002c-.255-.029-.457-.052-.651-.052-.621 0-.992.388-.992 1.038v.546c0 .685.355.93.735 1.092.572.26 1.283.4 3.4.4 2.169 0 3.778-1.165 4.304-3.118.903-3.354 3.314-13.47 3.417-13.9.011-.046.286-1.123.286-1.647 0-.675-.454-1.128-1.128-1.128m16.725 2.114c-1.91.001-2.822.999-2.943 3.229l5.662-.005c-.084-2.258-.903-3.224-2.719-3.224", clipRule: "evenodd" }), (0, jsx_runtime_1.jsx)("path", { fill: colors.LOGO_BACKGROUND, d: "M84.478 35.448H68.206L63.826 48H54.13L71.266.528H82.75L99.55 48H88.99zM76.57 9.624 70.33 28.08h12.144zM132.07 48l-10.692-16.2h-7.308V48h-9.432V1.656S110.674 0 121.498 0c12.42 0 19.848 4.32 19.848 14.004 0 9.888-6.108 14.136-10.488 16.068L143.338 48zm-17.988-23.7h10.692c4.584-1.92 6.708-4.38 6.708-9.36 0-5.184-3.72-7.236-9.828-7.236-3.852 0-7.572.66-7.572.66zM148.93 48V.66h32.328v8.028h-22.836v11.88h19.716v7.704h-19.716V39.96h23.436V48zM188.902 48V.66h32.328v8.028h-22.836v11.88h19.716v7.704h-19.716V39.96h23.436V48zM238.222 48h-9.36V.66h8.76L260.53 30.6V.66h9.432V48h-7.104l-24.636-31.464zM305.338 35.448h-16.272L284.698 48h-9.696L292.126.528h11.484L320.41 48h-10.56zm-7.896-25.824-6.24 18.456h12.144z" }), (0, jsx_runtime_1.jsx)("path", { fill: colors.LOGO_AREENA, d: "M107.067 72.001h106.55v12.05h-106.55z", opacity: 0.8 })] })));
};
exports.LogoAreenaStripeOnDark = LogoAreenaStripeOnDark;
