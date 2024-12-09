import React from "react";
import * as S from "./style";

type QuestionEditingSelectorProps = {
  questionList: Array<{ id: number; text: string; type: string }>;
  questionTypeOptions: string[];
  answerFormatOptions: string[];
  onQuestionChange: (id: number) => void;
  onTypeChange: (value: string) => void;
  onContentChange: (value: string) => void;
  onAnswerFormatChange: (value: string) => void;
};

const QuestionEditingSelector: React.FC<QuestionEditingSelectorProps> = ({
  questionList,
  questionTypeOptions,
  answerFormatOptions,
  onQuestionChange,
  onTypeChange,
  onContentChange,
  onAnswerFormatChange,
}) => {
  return (
    <S.Container>
      {/* Question List */}
      {questionList.map((question) => (
        <S.QuestionItem key={question.id}>
          <S.QuestionText>
            {question.text} <S.QuestionType>{question.type}</S.QuestionType>
          </S.QuestionText>
          <S.ToggleButton>▼</S.ToggleButton>
        </S.QuestionItem>
      ))}

      {/* Question Type Selector */}
      <S.Field>
        <S.Label>질문유형</S.Label>
        <S.Select onChange={(e) => onTypeChange(e.target.value)}>
          {questionTypeOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </S.Select>
      </S.Field>

      {/* Question Content Input */}
      <S.Field>
        <S.Label>질문내용</S.Label>
        <S.TextInput
          placeholder="질문을 입력해주세요"
          maxLength={120}
          onChange={(e) => onContentChange(e.target.value)}
        />
      </S.Field>

      {/* Answer Format Selector */}
      <S.Field>
        <S.Label>답변형식</S.Label>
        <S.Select onChange={(e) => onAnswerFormatChange(e.target.value)}>
          {answerFormatOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </S.Select>
      </S.Field>
    </S.Container>
  );
};

export default QuestionEditingSelector;
