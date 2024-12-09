import React from "react";
import * as S from "./style";

type Question = {
  question_id: number;
  num: number;
  title: string;
  type: string;
  is_required: number;
};

type ApplyQuestionListProps = {
  mode: "edit" | "submit";
  questions: Question[];
  answers: string[];
  onAnswerChange: (id: number, value: string) => void;
};

const ApplyQuestionList: React.FC<ApplyQuestionListProps> = ({
  mode,
  questions,
  answers,
  onAnswerChange,
}) => {
  return (
    <S.ApplyQuestionListContainer>
      {questions.map((question, index) => (
        <div key={question.question_id}>
          <S.Question>{`Q${question.num} ${question.title}`}</S.Question>
          {mode === "edit" ? (
            <S.AnswerInput
              value={answers[index]}
              onChange={(e) =>
                onAnswerChange(question.question_id, e.target.value)
              }
              maxLength={1500}
              placeholder="여기에 답변 입력 (최대 1,500자)"
            />
          ) : (
            <S.Answer>{answers[index]}</S.Answer>
          )}
        </div>
      ))}
    </S.ApplyQuestionListContainer>
  );
};

export default ApplyQuestionList;
