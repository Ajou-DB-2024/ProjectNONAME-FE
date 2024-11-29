import { keyframes } from "styled-components";

export const TagSelectionKeyframe = keyframes({
  "0%": { opacity: 0, display: "none" },
  "1%": { opacity: 0, paddingTop: 0, paddingBottom: 0 },
  "20%": { opacity: 0 },
  "100%": { opacity: 1 }
});

export const TagSelectionReverseKeyframe = keyframes({
  "0%": { opacity: 1 },
  "80%": { opacity: 0 },
  "99%": { opacity: 0, paddingTop: 0, paddingBottom: 0 },
  "100%": { opacity: 0, display: "none" }
});