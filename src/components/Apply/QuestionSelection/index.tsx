import React from "react";
import * as S from "./style";
import { IconEdit, IconCheckbox } from "@tabler/icons-react";

type QuestionSelectionProps = {
  label: string;
  status: "disabled" | "editable" | "completed";
  onClick: () => void;
};

const QuestionSelection: React.FC<QuestionSelectionProps> = ({
  label,
  status,
  onClick,
}) => {
  return (
    <S.Button
      status={status}
      onClick={onClick}
    >
      <S.Label>{label}</S.Label>
      {status === "completed" ? <IconCheckbox /> : <IconEdit/>}
    </S.Button>
  );
};

export default QuestionSelection;
