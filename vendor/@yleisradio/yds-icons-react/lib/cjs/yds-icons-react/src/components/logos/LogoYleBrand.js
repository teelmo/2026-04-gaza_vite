"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogoYleBrand = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const themeHelper_js_1 = require("../../helpers/themeHelper.js");
const LogoYleBrand = (_a) => {
    var { title = undefined, titleId = undefined, width = '48', height = '48', theme, colors } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "theme", "colors"]);
    if (!colors) {
        if (theme) {
            colors = (0, themeHelper_js_1.logoThemeColors)(theme);
        }
        else {
            colors = { LOGO_YLE_BACKGROUND_BRAND: '#00B4C8', LOGO_TEXT: '#fff' };
        }
    }
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 48 48", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsxs)("g", { clipPath: "url(#yle-brand__a)", children: [(0, jsx_runtime_1.jsx)("path", { fill: colors.LOGO_YLE_BACKGROUND_BRAND, d: "M48 2.226v43.547C48 46.961 46.972 48 45.844 48H2.254C1.029 48 0 46.96 0 45.773V2.226C0 .99 1.03 0 2.254 0h43.59C46.972 0 48 .99 48 2.226" }), (0, jsx_runtime_1.jsx)("path", { fill: colors.LOGO_TEXT, fillRule: "evenodd", d: "M22.46 10.124h1.957c1.586 0 1.586 1.42 1.586 2.268v16.945c0 .738-.145 1.493-1.22 1.493h-.64c-1.052 0-1.264-.571-1.264-1.493V13.2h-.33c-1.386 0-1.536-.788-1.536-1.127v-.867c0-1.082 1.089-1.082 1.446-1.082m16.404 17.762c.238-.047.444-.087.648-.087.62 0 .99.387.99 1.037v.499c0 .687-.356.933-.743 1.097-.607.279-2.156.58-4.114.58-4.707 0-6.457-1.862-6.457-6.868 0-5.128 1.879-7.415 6.093-7.415 4.989 0 5.566 3.653 5.566 6.4 0 1.293-.655 1.869-2.121 1.869H32.37c.104 2.6.495 3.165 3.82 3.165 1.286 0 2.097-.162 2.581-.259zm-20.26-10.791h-.773c-.85 0-1.138.53-1.347 1.447l-2.16 9.393h-.372c-.796.028-1.157-.081-1.415-1.114l-2.188-8.291-.024-.091c-.166-.63-.354-1.344-1.227-1.344h-.82c-.746 0-1.174.41-1.174 1.127 0 .394.106.978.333 1.84l2.324 8.285c.432 1.622 1.351 2.346 2.982 2.346h1.007c-.133.694-.299 1.485-.4 1.801-.408 1.267-1.02 1.499-2.08 1.499-.93 0-1.536-.071-1.98-.123l-.044-.005-.012-.002c-.255-.029-.457-.052-.651-.052-.621 0-.992.388-.992 1.038v.546c0 .685.355.93.735 1.092.572.26 1.283.4 3.4.4 2.169 0 3.778-1.165 4.304-3.118.903-3.354 3.314-13.47 3.417-13.9.011-.046.286-1.123.286-1.647 0-.675-.454-1.128-1.128-1.128m16.726 2.114c-1.91.001-2.823.999-2.944 3.229l5.662-.005c-.084-2.258-.903-3.224-2.718-3.224", clipRule: "evenodd" })] }), (0, jsx_runtime_1.jsx)("defs", { children: (0, jsx_runtime_1.jsx)("clipPath", { id: "yle-brand__a", children: (0, jsx_runtime_1.jsx)("path", { fill: colors.LOGO_TEXT, d: "M0 0h48v48H0z" }) }) })] })));
};
exports.LogoYleBrand = LogoYleBrand;
