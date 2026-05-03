export const themeHelper = (
  prefersDark: boolean,
  defaultDark: string | object,
  defaultLight: string | object,
  customDark: string | undefined | object,
  customLight: string | undefined | object
): string => {
  if (prefersDark && customDark) return customDark;
  else if (prefersDark) return defaultDark;
  else if (!prefersDark && customLight) return customLight;
  else return defaultLight;
};
