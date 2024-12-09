import React, { useCallback, useState } from "react";
import QuestionSelection from "../QuestionSelection";
import * as S from "./style";

type Question = {
  question_id: number;
  num: number;
  title: string;
  type: string;
  is_required: number;
};

type QuestionSelectorProps = {
  questions: Question[];
  filled_answers: number[];
  onSelect: (selectedId: number) => void;
};

const QuestionSelector: React.FC<QuestionSelectorProps> = ({
  questions, filled_answers,
  onSelect,
}) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleSelect = useCallback((id: number) => {
    if (id === selectedId) {
      setSelectedId(null);
      onSelect(-1);
      return;
    }
    setSelectedId(id);
    onSelect(id); // 선택된 항목 ID를 부모 컴포넌트에 전달
  }, [selectedId]);

  return (
    <S.SelectorContainer>
      {questions.map((question) => (
        <QuestionSelection
          key={question.question_id}
          label={`문항 ${question.num}`}
          status={
            selectedId === question.question_id ? "editable"
            : filled_answers.includes(question.question_id || -1) ? "completed"
            : "disabled"
          }
          onClick={() => handleSelect(question.question_id)}
        />
      ))}
    </S.SelectorContainer>
  );
};

export default QuestionSelector;
