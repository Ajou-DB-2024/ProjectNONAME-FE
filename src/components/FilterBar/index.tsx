import React from "react";
import * as S from "./style";
import { IconEyeClosed, IconMoodCheck, IconSearch, IconSquareCheck } from "@tabler/icons-react";
import states from "@/core/zustand/states";
import { ServiceButtonTheme } from "../common/ServiceButton/type";

const FilterBar: React.FC<{applicants: { name: string; grade: string; department: string; resumeLink: string }[]}> = ({applicants}) => {
  const { alert } = states.useGlobalAlertQueue();

  const onApplicationJudged = (judgement: string) => {
    if ( judgement === "cancel" ) return true;

    setTimeout(() => {
      alert({
        type: "GLOBAL_ALERT_TYPE/NORMAL",
        contents: {
          title: `합불결과가 기록되었습니다`,
          desc: "",
          buttons: [
            { 
              text: "확인", value: "true",
              theme: ServiceButtonTheme.COLORED, mode: "main",
              onClick: () => true 
            }
          ]
        }
      });
    }, 300);
    return true;
  }

  const onApplicantSelect = (value: string) => {
    setTimeout(() => {
      alert({
        type: "GLOBAL_ALERT_TYPE/SELECT",
        contents: {
          title: `${value.split("_")[0]}의 합격결과를 선택해주세요`,
          desc: "이 결정은 번복할 수 없어요",
          selections: [
            { text: "합격", value: "confirm" },
            { text: "불합격", value: "deny" },
            { text: "취소", value: "cancel" },
          ],
          onSelect: onApplicationJudged
        }
      });
    }, 300);
    return true;
  }

  const onIconClick = () => {
    alert({
      type: "GLOBAL_ALERT_TYPE/SELECT",
      contents: {
        title: "어떤 지원자의 합불을 기록할까요?",
        desc: "",
        selections: applicants.map(applicant => ({
          text: `${applicant.name}/${applicant.grade}/${applicant.department}`,
          value: `${applicant.name}_${Math.random()}`
        })),
        onSelect: onApplicantSelect
      }
    })
  }

  return (
    <S.Container>
      <S.FilterButton><IconSquareCheck/></S.FilterButton>
      <S.Divider />
      <S.FilterButton><IconEyeClosed/></S.FilterButton>
      <S.FilterButton onClick={onIconClick}><IconMoodCheck/></S.FilterButton>
      <S.SearchButton><IconSearch/></S.SearchButton>
    </S.Container>
  );
};

export default FilterBar;
