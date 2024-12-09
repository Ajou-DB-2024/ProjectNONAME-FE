import React from "react";
import * as S from "./style";

const QuestionEditor: React.FC = () => {
  return (
    <S.Container>
      <S.Select>
        <option>필수</option>
        <option>선택</option>
      </S.Select>
      <S.TextInput placeholder="질문 내용을 입력하세요" maxLength={120} />
    </S.Container>
  );
};

export default QuestionEditor;
