"use client";

import { useState, useEffect, useRef, useMemo, useCallback } from "react";

import * as S from './style';
import * as C from '@/constants';

// global state
// import states from "@/core/zustand/states";

// assets
import { IconChevronLeft, IconSend, IconTrash } from "@tabler/icons-react"
import PageNavigation from "@/components/common/PageNavigation";
import ApplyQuestionBlock from "@/components/Apply/ApplyQuestionBlock";
import ApplyAnswerBlock from "@/components/Apply/ApplyAnswerBlock";
import QuestionSelector from "@/components/Apply/QuestionSelector";
import IconicButton from "@/components/common/IconicButton";
import { ServiceButtonTheme } from "@/components/common/ServiceButton/type";
import states from "@/core/zustand/states";

// API
// import dataAPI from "@data/index"

// constants

// types
type ApplicationTemplateProps = {
  mode: "edit" | "submit"
  questions: {
    question_id: number,
    num: number,
    title: string,
    type: string,
    is_required: number,
  }[]
}

// components


const ApplicationTemplate: React.FC<ApplicationTemplateProps> = ({ mode, questions }) => {

  const { alert } = states.useGlobalAlertQueue();

  const [ num, setNum ] = useState(-1);
  const question = useMemo(() => questions.find(v => v.num === num), [num]);

  const [ answers, setAnswers ] = useState<{
    [ keys in number ]: string
  }>({});

  const onQuestionUpdate = (selectedId: number) => {
    console.log(selectedId);
    setNum(selectedId);
  }

  const onAnswerInputed = useCallback((value: string) => {
    setAnswers(p => ({
      ...p,
      [num]: value
    }))
  }, [num]);

  const onSubmitConfirmed = (value: string) => {
    setTimeout(() => {
      alert({
        type: "GLOBAL_ALERT_TYPE/NORMAL",
        contents: {
          title: `지원서가 정상적으로 제출되었습니다.`,
          desc: "",
          buttons: [
            { 
              text: "확인", value: "true",
              theme: ServiceButtonTheme.COLORED, mode: "main",
              onClick: () => {
                location.href = "/";
                return true;
              } 
            }
          ]
        }
      });
    }, 1000);
    return true;
  }

  const onSubmitClick = () => {
    alert({
      type: "GLOBAL_ALERT_TYPE/NORMAL",
      contents: {
        title: `이 지원서를 제출할까요?`,
        desc: "이 결정은 번복할 수 없어요",
        buttons: [
          { 
            text: "제출", value: "true",
            theme: ServiceButtonTheme.COLORED, mode: "main",
            onClick: onSubmitConfirmed 
          },
          { 
            text: "취소", value: "false",
            theme: ServiceButtonTheme.COLORED, mode: "sub",
            onClick: () => true 
          },
        ]
      }
    });
  }

  return <S.ApplicationTemplate>
    <S.HyperlinkArea>
      <IconChevronLeft/>
      <span>Weave로 돌아가기</span>
    </S.HyperlinkArea>
    <S.HeaderArea>
      <PageNavigation info={{
        prev: "지원서 목록",
        curr: "지원서 작성",
      }}/>
      <S.ButtonArea>
        <IconicButton mode={"sub"}><IconTrash width={20} color="#d01616"/></IconicButton>
        <IconicButton mode={"main"} label="제출하기" onClick={onSubmitClick}><IconSend width={20} color="white"/></IconicButton>
      </S.ButtonArea>
    </S.HeaderArea>
    <S.ServiceArea>
      <S.ControlSection>
        <QuestionSelector 
          questions={questions} filled_answers={
            Object.keys(answers)
            .filter((v, i) => (answers[v as any]?.length > 0))
            .map(v => Number(v))
          }
          onSelect={onQuestionUpdate}
        />
      </S.ControlSection>
      { question && <S.QASection>
        <ApplyQuestionBlock index={question.num} question={question.title}/>
        <ApplyAnswerBlock index={question.num} maxLength={1500}
          value={answers[num]}
          onInputComplete={onAnswerInputed}
        />
      </S.QASection> }
    </S.ServiceArea>
  </S.ApplicationTemplate>
};

export default ApplicationTemplate