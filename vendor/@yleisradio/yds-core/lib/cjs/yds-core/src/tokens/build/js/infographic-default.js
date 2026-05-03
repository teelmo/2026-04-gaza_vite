"use strict";
/**
 * Yle Design System
 * v2.x.x
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.POLITICAL_PARTY_FI_KESK_PRIMARY = exports.POLITICAL_PARTY_FI_VIHR_SECONDARY = exports.POLITICAL_PARTY_FI_VIHR_PRIMARY = exports.POLITICAL_PARTY_FI_SDP_SECONDARY = exports.POLITICAL_PARTY_FI_SDP_PRIMARY = exports.POLITICAL_PARTY_FI_PS_SECONDARY = exports.POLITICAL_PARTY_FI_PS_PRIMARY = exports.POLITICAL_PARTY_FI_KOK_SECONDARY = exports.POLITICAL_PARTY_FI_KOK_PRIMARY = exports.ACCENT_NEWS = exports.SPORTS_MONOCHROME_6 = exports.SPORTS_MONOCHROME_5 = exports.SPORTS_MONOCHROME_4 = exports.SPORTS_MONOCHROME_3 = exports.SPORTS_MONOCHROME_2 = exports.SPORTS_MONOCHROME_1 = exports.SPORTS_DEFAULT_6 = exports.SPORTS_DEFAULT_5 = exports.SPORTS_DEFAULT_4 = exports.SPORTS_DEFAULT_3 = exports.SPORTS_DEFAULT_2 = exports.SPORTS_DEFAULT_1 = exports.NEWS_MONOCHROME_6 = exports.NEWS_MONOCHROME_5 = exports.NEWS_MONOCHROME_4 = exports.NEWS_MONOCHROME_3 = exports.NEWS_MONOCHROME_2 = exports.NEWS_MONOCHROME_1 = exports.NEWS_DEFAULT_6 = exports.NEWS_DEFAULT_5 = exports.NEWS_DEFAULT_4 = exports.NEWS_DEFAULT_3 = exports.NEWS_DEFAULT_2 = exports.NEWS_DEFAULT_1 = exports.TEXT_MINUS = exports.TEXT_PLUS = exports.TEXT_LIGHT = exports.TEXT_DARK = exports.TEXT_SECONDARY = exports.TEXT_NEGATIVE = exports.GRIDLINE = exports.TOOLTIP_BACKGROUND = exports.BACKGROUND = exports.TEXT_DEFAULT = exports.WEATHER_ICON_SUN = exports.WEATHER_ICON_DROPLET = exports.WEATHER_ICON_MOON = exports.WEATHER_ICON_CLOUD_DARK = exports.WEATHER_ICON_CLOUD_MID = exports.WEATHER_ICON_CLOUD_LIGHT = void 0;
exports.SURVEY_NEUTRAL = exports.SURVEY_EMPTY = exports.SURVEY_NO = exports.SURVEY_YES = exports.SCALE_STRONGLY_DISAGREE = exports.SCALE_DISAGREE = exports.SCALE_NEUTRAL = exports.SCALE_AGREE = exports.SCALE_STRONGLY_AGREE = exports.POLITICAL_PARTY_FI_OTHERS_SECONDARY = exports.POLITICAL_PARTY_FI_OTHERS_PRIMARY = exports.POLITICAL_PARTY_FI_LIIK_SECONDARY = exports.POLITICAL_PARTY_FI_LIIK_PRIMARY = exports.POLITICAL_PARTY_FI_KD_SECONDARY = exports.POLITICAL_PARTY_FI_KD_PRIMARY = exports.POLITICAL_PARTY_FI_RKP_SECONDARY = exports.POLITICAL_PARTY_FI_RKP_PRIMARY = exports.POLITICAL_PARTY_FI_VAS_SECONDARY = exports.POLITICAL_PARTY_FI_VAS_PRIMARY = exports.POLITICAL_PARTY_FI_KESK_SECONDARY = void 0;
exports.WEATHER_ICON_CLOUD_LIGHT = 'var(--yds-infographic-weather-icon-cloud-light, rgba(0, 0, 0, 0.15))'; // black-opacity-30
exports.WEATHER_ICON_CLOUD_MID = 'var(--yds-infographic-weather-icon-cloud-mid, rgba(0, 0, 0, 0.47))'; // black-opacity-50
exports.WEATHER_ICON_CLOUD_DARK = 'var(--yds-infographic-weather-icon-cloud-dark, rgba(0, 0, 0, 0.7))'; // black-opacity-60
exports.WEATHER_ICON_MOON = 'var(--yds-infographic-weather-icon-moon, #95c6ff)'; // info-blue-20
exports.WEATHER_ICON_DROPLET = 'var(--yds-infographic-weather-icon-droplet, #2684ff)'; // info-blue-50
exports.WEATHER_ICON_SUN = 'var(--yds-infographic-weather-icon-sun, #ffc400)'; // info-yellow-50
exports.TEXT_DEFAULT = 'var(--yds-infographic-text-default, #131415)'; // default-text
exports.BACKGROUND = 'var(--yds-infographic-background, #ffffff)'; // background
exports.TOOLTIP_BACKGROUND = 'var(--yds-infographic-tooltip-background, #131415)'; // negative-background
exports.GRIDLINE = 'var(--yds-infographic-gridline, #b4b6b7)'; // gray-40
exports.TEXT_NEGATIVE = 'var(--yds-infographic-text-negative, #f8f9fa)'; // negative-text
exports.TEXT_SECONDARY = 'var(--yds-infographic-text-secondary, #4a4f54)'; // gray-60
exports.TEXT_DARK = 'var(--yds-infographic-text-dark, #131415)'; // dark-text
exports.TEXT_LIGHT = 'var(--yds-infographic-text-light, #f8f9fa)'; // light-text
exports.TEXT_PLUS = 'var(--yds-infographic-text-plus, #00809c)'; // turquoise-70
exports.TEXT_MINUS = 'var(--yds-infographic-text-minus, #b83c35)'; // news-orange-70
exports.NEWS_DEFAULT_1 = 'var(--yds-infographic-news-default-1, #7c59fa)'; // news-violet-40
exports.NEWS_DEFAULT_2 = 'var(--yds-infographic-news-default-2, #009cb5)'; // turquoise-60
exports.NEWS_DEFAULT_3 = 'var(--yds-infographic-news-default-3, #0b54b4)'; // info-blue-90
exports.NEWS_DEFAULT_4 = 'var(--yds-infographic-news-default-4, #f56a1b)'; // info-orange-60
exports.NEWS_DEFAULT_5 = 'var(--yds-infographic-news-default-5, #80259f)'; // info-purple-60
exports.NEWS_DEFAULT_6 = 'var(--yds-infographic-news-default-6, #2f2372)'; // news-violet-80
exports.NEWS_MONOCHROME_1 = 'var(--yds-infographic-news-monochrome-1, #1e1753)'; // news-violet-90
exports.NEWS_MONOCHROME_2 = 'var(--yds-infographic-news-monochrome-2, #413091)'; // news-violet-70
exports.NEWS_MONOCHROME_3 = 'var(--yds-infographic-news-monochrome-3, #694bd7)'; // news-violet-50
exports.NEWS_MONOCHROME_4 = 'var(--yds-infographic-news-monochrome-4, #9479fb)'; // news-violet-30
exports.NEWS_MONOCHROME_5 = 'var(--yds-infographic-news-monochrome-5, #b7a8fa)'; // news-violet-20
exports.NEWS_MONOCHROME_6 = 'var(--yds-infographic-news-monochrome-6, #d3cbfb)'; // news-violet-10
exports.SPORTS_DEFAULT_1 = 'var(--yds-infographic-sports-default-1, #5541ed)'; // sports-violet-50
exports.SPORTS_DEFAULT_2 = 'var(--yds-infographic-sports-default-2, #ea3e85)'; // sports-pink-40
exports.SPORTS_DEFAULT_3 = 'var(--yds-infographic-sports-default-3, #618515)'; // sports-lime-80
exports.SPORTS_DEFAULT_4 = 'var(--yds-infographic-sports-default-4, #8578f2)'; // sports-violet-30
exports.SPORTS_DEFAULT_5 = 'var(--yds-infographic-sports-default-5, #f273a8)'; // sports-pink-30
exports.SPORTS_DEFAULT_6 = 'var(--yds-infographic-sports-default-6, #2c4d01)'; // sports-lime-95
exports.SPORTS_MONOCHROME_1 = 'var(--yds-infographic-sports-monochrome-1, #1a1476)'; // sports-violet-80
exports.SPORTS_MONOCHROME_2 = 'var(--yds-infographic-sports-monochrome-2, #372bb1)'; // sports-violet-60
exports.SPORTS_MONOCHROME_3 = 'var(--yds-infographic-sports-monochrome-3, #5541ed)'; // sports-violet-50
exports.SPORTS_MONOCHROME_4 = 'var(--yds-infographic-sports-monochrome-4, #8578f2)'; // sports-violet-30
exports.SPORTS_MONOCHROME_5 = 'var(--yds-infographic-sports-monochrome-5, #b3abf7)'; // sports-violet-20
exports.SPORTS_MONOCHROME_6 = 'var(--yds-infographic-sports-monochrome-6, #ddd9fc)'; // sports-violet-10
exports.ACCENT_NEWS = 'var(--yds-infographic-accent-news, #f26659)'; // news-orange-50
exports.POLITICAL_PARTY_FI_KOK_PRIMARY = 'var(--yds-infographic-political-party-fi-kok-primary, #0357a5)';
exports.POLITICAL_PARTY_FI_KOK_SECONDARY = 'var(--yds-infographic-political-party-fi-kok-secondary, #8eb4d7)';
exports.POLITICAL_PARTY_FI_PS_PRIMARY = 'var(--yds-infographic-political-party-fi-ps-primary, #159af0)';
exports.POLITICAL_PARTY_FI_PS_SECONDARY = 'var(--yds-infographic-political-party-fi-ps-secondary, #96d2f8)';
exports.POLITICAL_PARTY_FI_SDP_PRIMARY = 'var(--yds-infographic-political-party-fi-sdp-primary, #e01515)';
exports.POLITICAL_PARTY_FI_SDP_SECONDARY = 'var(--yds-infographic-political-party-fi-sdp-secondary, #ef9897)';
exports.POLITICAL_PARTY_FI_VIHR_PRIMARY = 'var(--yds-infographic-political-party-fi-vihr-primary, #769f20)';
exports.POLITICAL_PARTY_FI_VIHR_SECONDARY = 'var(--yds-infographic-political-party-fi-vihr-secondary, #bccf95)';
exports.POLITICAL_PARTY_FI_KESK_PRIMARY = 'var(--yds-infographic-political-party-fi-kesk-primary, #096900)';
exports.POLITICAL_PARTY_FI_KESK_SECONDARY = 'var(--yds-infographic-political-party-fi-kesk-secondary, #90bc8c)';
exports.POLITICAL_PARTY_FI_VAS_PRIMARY = 'var(--yds-infographic-political-party-fi-vas-primary, #bb1054)';
exports.POLITICAL_PARTY_FI_VAS_SECONDARY = 'var(--yds-infographic-political-party-fi-vas-secondary, #e094b2)';
exports.POLITICAL_PARTY_FI_RKP_PRIMARY = 'var(--yds-infographic-political-party-fi-rkp-primary, #c97b2d)';
exports.POLITICAL_PARTY_FI_RKP_SECONDARY = 'var(--yds-infographic-political-party-fi-rkp-secondary, #deb186)';
exports.POLITICAL_PARTY_FI_KD_PRIMARY = 'var(--yds-infographic-political-party-fi-kd-primary, #923de8)';
exports.POLITICAL_PARTY_FI_KD_SECONDARY = 'var(--yds-infographic-political-party-fi-kd-secondary, #cea8f5)';
exports.POLITICAL_PARTY_FI_LIIK_PRIMARY = 'var(--yds-infographic-political-party-fi-liik-primary, #c262b8)';
exports.POLITICAL_PARTY_FI_LIIK_SECONDARY = 'var(--yds-infographic-political-party-fi-liik-secondary, #e4b8df)';
exports.POLITICAL_PARTY_FI_OTHERS_PRIMARY = 'var(--yds-infographic-political-party-fi-others-primary, #8d8e8f)';
exports.POLITICAL_PARTY_FI_OTHERS_SECONDARY = 'var(--yds-infographic-political-party-fi-others-secondary, #cccccd)';
exports.SCALE_STRONGLY_AGREE = 'var(--yds-infographic-scale-strongly-agree, #009cb5)'; // turquoise-60
exports.SCALE_AGREE = 'var(--yds-infographic-scale-agree, #5ddbe9)'; // turquoise-30
exports.SCALE_NEUTRAL = 'var(--yds-infographic-scale-neutral, #b4b6b7)'; // gray-40
exports.SCALE_DISAGREE = 'var(--yds-infographic-scale-disagree, #f79c94)'; // news-orange-30
exports.SCALE_STRONGLY_DISAGREE = 'var(--yds-infographic-scale-strongly-disagree, #f26659)'; // news-orange-50
exports.SURVEY_YES = 'var(--yds-infographic-survey-yes, #009cb5)'; // turquoise-60
exports.SURVEY_NO = 'var(--yds-infographic-survey-no, #f26659)'; // news-orange-50
exports.SURVEY_EMPTY = 'var(--yds-infographic-survey-empty, #d8d9db)'; // gray-30
exports.SURVEY_NEUTRAL = 'var(--yds-infographic-survey-neutral, #878a8b)'; // gray-50
