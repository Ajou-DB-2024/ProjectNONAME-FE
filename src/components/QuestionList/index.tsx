import React from "react";
import * as S from "./style";
import QuestionBlock from "../QuestionBlock";

type QuestionListProps = {
  questions: Array<{ id: number; text: string; type: string }>;
};

const QuestionList: React.FC<QuestionListProps> = ({ questions }) => {
  return (
    <S.Container>
      {questions.map((question, i) => (
        <QuestionBlock index={i}/>
      ))}
    </S.Container>
  );
};

export default QuestionList;
