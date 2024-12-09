"use client";

import React from "react";
import * as S from "./style";
import FormSummary from "@/components/FormSummary";
import QuestionList from "@/components/QuestionList";
import QuestionEditor from "@/components/QuestionEditor";
import SubmitSection from "@/components/SubmitSection";
import PageNavigation from "@/components/common/PageNavigation";
import ServiceInput from "@/components/common/ServiceInput";
import QuestionEditingSelector from "@/components/QuestionEditingSelector";

const CreateFormTemplate: React.FC = () => {
  const mockQuestions = [
    { id: 1, text: "문항 1", type: "필수" },
    { id: 2, text: "문항 2", type: "필수" },
    { id: 3, text: "문항 3", type: "선택" },
  ];

  return (
    <S.Container>
      <PageNavigation info={{
        prev: "지원폼 선택하기",
        curr: "지원폼 만들기",
      }}/>
      <S.Wrap>
        <section style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem"
        }}>
          <ServiceInput 
            options={{ 
              title: "지원폼 이름",
              maxLength: 120
            }}
            onInputComplete={ () => console.log("sefjseifojse") }
          />
          <FormSummary />
        </section>
        <QuestionList questions={mockQuestions}/>
        <SubmitSection totalQuestions={mockQuestions.length} />
      </S.Wrap>
    </S.Container>
  );
};

export default CreateFormTemplate;
