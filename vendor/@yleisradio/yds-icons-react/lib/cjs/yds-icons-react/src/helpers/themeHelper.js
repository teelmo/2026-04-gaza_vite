"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logoThemeColors = exports.themeColors = void 0;
const yds_core_1 = require("@yleisradio/yds-core");
const themeColors = (theme) => {
    switch (theme) {
        case 'dark':
            return {
                primary: '#F8F9FA',
                secondary: '#009CB5',
            };
        case 'light':
            return {
                primary: '#131415',
                secondary: '#5DDBE9',
            };
        default:
            return {
                primary: 'var(--yds-color-illustrative-icons-icon-primary, #131415)',
                secondary: 'var(--yds-color-illustrative-icons-icon-secondary, #5DDBE9)',
            };
    }
};
exports.themeColors = themeColors;
const logoThemeColors = (theme) => {
    switch (theme) {
        case 'dark':
            return yds_core_1.darkTheme;
        case 'light':
            return yds_core_1.lightTheme;
        case 'default':
            return yds_core_1.defaultTheme;
        default:
            return yds_core_1.lightTheme;
    }
};
exports.logoThemeColors = logoThemeColors;
