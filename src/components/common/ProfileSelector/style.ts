import { IconChevronDown } from "@tabler/icons-react";
import styled from "styled-components";

export const ProfileSelectorArea = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: .5em;

  & * {
    user-select: none;
  }
`;

export const SelectedProfileName = styled.h1`
  font-size: 1.5em;
  font-weight: 700;
`;

export const ArrowIcon = styled(IconChevronDown)<{status: "selected" | "selecting"}>`
  width: 1.5em;
  height: 1.5em;

  ${({status}) => status === "selecting" && "transform: rotateZ(180deg);"}
`;