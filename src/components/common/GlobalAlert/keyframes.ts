import { keyframes } from "styled-components";

export const GlobalAlertBackgroundInKeyframe = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 }
});

export const GlobalAlertBackgroundOutKeyframe = keyframes({
  "0%": { opacity: 1 },
  "100%": { opacity: 0 }
});

export const GlobalAlertOpenKeyframe = keyframes({
  "0%": { opacity: 0, display: "none" },
  "1%": { opacity: 0, marginBottom: "-200px" },
  "100%": { opacity: 1 }
});

export const GlobalAlertCloseKeyframe = keyframes({
  "0%": { opacity: 1 },
  "99%": { opacity: 0, marginBottom: "-200px" },
  "100%": { opacity: 0, display: "none" }
});