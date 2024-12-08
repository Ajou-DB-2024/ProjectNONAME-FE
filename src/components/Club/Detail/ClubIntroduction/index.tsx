"use client";

import React, { useState } from "react";
import * as S from "./style";
import { IconKey } from "@tabler/icons-react";

type MobileInterviewBlockProps = {
  content: string;
  mode?: "view" | "edit";
  onValueChange?: (newValue: string) => void;
};

const MobileInterviewBlock: React.FC<MobileInterviewBlockProps> = ({
  content,
  mode = "view",
  onValueChange,
}) => {
  const [editableContent, setEditableContent] = useState(content);

  const handleBlur = () => {
    if (onValueChange) {
      onValueChange(editableContent);
    }
  };

  return (
    <S.BlockContainer>
      <S.IconWrapper>
        <IconKey size={24} />
      </S.IconWrapper>
      {mode === "edit" ? (
        <S.Input
          value={editableContent}
          onChange={(e) => setEditableContent(e.target.value)}
          onBlur={handleBlur}
        />
      ) : (
        <S.Content>{editableContent}</S.Content>
      )}
    </S.BlockContainer>
  );
};

export default MobileInterviewBlock;
