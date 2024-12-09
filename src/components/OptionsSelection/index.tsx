import React from "react";
import * as S from "./style";
import ServiceButton from "@/components/common/ServiceButton";
import { ServiceButtonSize, ServiceButtonTheme } from "../common/ServiceButton/type";
import states from "@/core/zustand/states";

const OptionsSection: React.FC = () => {

  const { alert } = states.useGlobalAlertQueue();

  return (
    <S.Container>
      <S.Row>
        <ServiceButton
          size={ServiceButtonSize.NORMAL}
          theme={ServiceButtonTheme.DEFAULT}
          mode="main"
          style={{ width: "100%" }}
          onClick={() => {
            alert({
              type: "GLOBAL_ALERT_TYPE/PROMPT",
              contents: {
                title: "리크루딩 기간을 연장할게요",
                desc: "연장할 리크루딩 시간을 입력해주세요. 입력형식은 처음 입력했던 형식과 같아요. (YYYY-MM-DD HH:SS)",
                buttons: [
                  { text: "연장", theme: ServiceButtonTheme.COLORED, mode: "main", onClick: (value) => {
                    setTimeout(() => {
                      alert({
                        type: "GLOBAL_ALERT_TYPE/NORMAL",
                        contents: {
                          title: "리크루딩 기간을 연장했어요!",
                          desc: `연장된 시간을 확인해주세요: ${value}`,
                          buttons: [
                            { text: "확인", value: "", theme: ServiceButtonTheme.COLORED, mode: "main", onClick: () => {
                              console.log(encodeURI(value));
                              location.href += `?time=${encodeURI(value)}`
                              return true;
                            } }
                          ]
                        }
                      })
                    }, 1000);
                    return true;
                  } }
                ]
              }
            })
          }}
        >
          기간 연장
        </ServiceButton>
        <ServiceButton
          size={ServiceButtonSize.NORMAL}
          theme={ServiceButtonTheme.COLORED}
          mode="main"
          style={{ width: "100%", backgroundColor: "#ec0a0a" }}
          onClick={() => {
            alert({
              type: "GLOBAL_ALERT_TYPE/ALERT",
              contents: {
                title: "리크루딩을 지금 바로 종료할까요?",
                desc: "아직 지원서를 작성중일 수 있어요. 지원기간을 변경하는 것도 가능해요.",
                buttons: [
                  { text: "닫기", value: "", theme: ServiceButtonTheme.COLORED, mode: "main", onClick: () => true },
                  { text: "리크루딩 종료", value: "", theme: ServiceButtonTheme.COLORED, mode: "sub", onClick: () => {
                    location.href = "/test/recruit/member/close";
                    return true;
                  } },
                ]
              }
            })
          }}
        >
          리크루팅 종료
        </ServiceButton>
      </S.Row>
      <ServiceButton
        size={ServiceButtonSize.NORMAL}
        theme={ServiceButtonTheme.DEFAULT}
        mode="main"
        style={{width: "100%"}}
      >
        동아리 소개페이지 수정
      </ServiceButton>
    </S.Container>
  );
};

export default OptionsSection;
