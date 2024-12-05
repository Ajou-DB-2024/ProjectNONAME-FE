export const ServiceButtonSize = {
  XLARGE: "SERVICE_BUTTON/SIZE/XLARGE",
  LARGE: "SERVICE_BUTTON/SIZE/LARGE",
  NORMAL: "SERVICE_BUTTON/SIZE/NORMAL",
  SMALL: "SERVICE_BUTTON/SIZE/SMALL",
  XSMALL: "SERVICE_BUTTON/SIZE/XSMALL"
} as const;
export type ServiceButtonSize = typeof ServiceButtonSize[ keyof typeof ServiceButtonSize ]

export const ServiceButtonTheme = {
  DEFAULT: "SERVICE_BUTTON/THEME/DEFAULT",
  COLORED: "SERVICE_BUTTON/THEME/COLORED"
} as const;
export type ServiceButtonTheme = typeof ServiceButtonTheme[ keyof typeof ServiceButtonTheme ]