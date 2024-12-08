"use client";

import React, { useState } from "react";
import * as S from "./style";
import { IconTrophy } from "@tabler/icons-react";

type AchievementCardProps = {
  title: string;
  count: string;
  mode?: "view" | "edit";
  onValueChange?: (newTitle: string, newCount: string) => void;
};

const AchievementCard: React.FC<AchievementCardProps> = ({
  title,
  count,
  mode = "view",
  onValueChange,
}) => {
  const [editableTitle, setEditableTitle] = useState(title);
  const [editableCount, setEditableCount] = useState(count);

  const handleBlur = () => {
    if (onValueChange) {
      onValueChange(editableTitle, editableCount);
    }
  };

  return (
    <S.CardContainer>
      <S.IconWrapper>
        <IconTrophy size="1.5em" color="var(--service-color-H)" />
      </S.IconWrapper>
      <S.ContentWrapper>
        {mode === "edit" ? (
          <>
            <S.Input
              value={editableTitle}
              onChange={(e) => setEditableTitle(e.target.value)}
              onBlur={handleBlur}
            />
            <S.Input
              value={editableCount}
              onChange={(e) => setEditableCount(e.target.value)}
              onBlur={handleBlur}
            />
          </>
        ) : (
          <>
            <S.Title>{editableTitle}</S.Title>
            <S.Count>{editableCount}</S.Count>
          </>
        )}
      </S.ContentWrapper>
    </S.CardContainer>
  );
};

export default AchievementCard;
