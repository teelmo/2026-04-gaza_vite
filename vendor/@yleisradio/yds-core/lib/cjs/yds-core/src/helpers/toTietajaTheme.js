"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const darkThemeImport = tslib_1.__importStar(require("../tokens/build/js/theme-dark.js"));
const futistietajaTheme = tslib_1.__importStar(require("../tokens/build/js/theme-futistietaja.js"));
const viisutietajaTheme = tslib_1.__importStar(require("../tokens/build/js/theme-viisutietaja.js"));
const yleisurheilutietajaTheme = tslib_1.__importStar(require("../tokens/build/js/theme-yleisurheilutietaja.js"));
const darkTheme = darkThemeImport;
const replaceTokensInTheme = (tietajaTheme) => Object.keys(darkTheme).reduce((acc, themeToken) => {
    const tietajaToken = tietajaTheme[themeToken];
    if (!tietajaToken) {
        return Object.assign(Object.assign({}, acc), { [themeToken]: darkTheme[themeToken] });
    }
    return Object.assign(Object.assign({}, acc), { [themeToken]: tietajaToken });
}, darkTheme);
const resolveTietajaTheme = (backgroundColor) => {
    switch (backgroundColor.toUpperCase()) {
        case viisutietajaTheme.BACKGROUND.toUpperCase():
            return replaceTokensInTheme(viisutietajaTheme);
        case futistietajaTheme.BACKGROUND.toUpperCase():
            return replaceTokensInTheme(futistietajaTheme);
        case yleisurheilutietajaTheme.BACKGROUND.toUpperCase():
            return replaceTokensInTheme(yleisurheilutietajaTheme);
        default:
            return darkTheme;
    }
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
exports.default = (backgroundColor, highlightColor) => resolveTietajaTheme(backgroundColor);
