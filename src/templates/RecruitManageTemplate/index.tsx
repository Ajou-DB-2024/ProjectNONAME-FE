"use client";

import React, { useEffect, useState } from "react";
import * as S from "./style";
import SummaryBox from "@/components/SummaryBox";
import OptionsSection from "@/components/OptionsSelection";
import ApplicantList from "@/components/ApplicantList";
import PageNavigation from "@/components/common/PageNavigation";
import ServiceButton from "@/components/common/ServiceButton";
import { ServiceButtonSize, ServiceButtonTheme } from "@/components/common/ServiceButton/type";
import states from "@/core/zustand/states";

const RecruitManageTemplate: React.FC<{
  status?: boolean,
  remainingTime: string;
  applicantCount: number;
  applicants: Array<{ name: string; grade: string; department: string; resumeLink: string }>;
}> = ({ status = true, remainingTime, applicantCount, applicants }) => {

  const { alert } = states.useGlobalAlertQueue();

  const getRemainingTime = (targetDateTime: string): string => {
    // 현재 시간
    const now = new Date();
  
    // 입력된 시간을 Date 객체로 변환
    const targetDate = new Date(targetDateTime);
  
    // 남은 시간 계산 (밀리초 단위)
    const remainingTime = targetDate.getTime() - now.getTime();
  
    // 만약 시간이 이미 지난 경우
    if (remainingTime <= 0) {
      return "시간이 지났습니다.";
    }
  
    // 밀리초를 시간, 분, 초로 변환
    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
  
    // 결과 반환
    return `${days}일 ${hours}시간 ${minutes}분 ${seconds}초`;
  }
  
  const [ text, setText ] = useState("계산중...");
  useEffect(() => {
    let time = decodeURI(location?.search?.split("time=")[1]?.replaceAll("%7C", "") || "2024-12-17 01:00");
    setInterval(() => {
      // console.log(time);
      setText(getRemainingTime(time));
    }, 1000);
  }, []);

  const onAnnounceConfirmed = () => {
    location.href = "/";
    return true;
  }

  const announceJudgement = () => {
      alert({
        type: "GLOBAL_ALERT_TYPE/NORMAL",
        contents: {
          title: `결과를 발표할까요?`,
          desc: "발표 즉시 지원자들에게 알림이 발송돼요. 취소할 수 없어요.",
          buttons: [
            { 
              text: "결과 발표", value: "true",
              theme: ServiceButtonTheme.COLORED, mode: "main",
              onClick: onAnnounceConfirmed
            },
            { 
              text: "발표 취소", value: "false",
              theme: ServiceButtonTheme.COLORED, mode: "sub",
              onClick: () => true
            },
          ]
        }
      });
    return true;
  }

  return (
    <S.Container>
      <PageNavigation info={{prev: "리크루딩 관리", curr: "DBClub 임원진 리크루딩 세션"}}/>
      <SummaryBox status={status} remainingTime={text} applicantCount={applicants.length} />
      { status && <OptionsSection/> }
      <ApplicantList applicants={applicants}/>
      {
        !status && <section style={{
          width: "100%",
          padding: "0 1.5em",
          marginBottom: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems:"center",
          justifyContent:"flex-end",
          gap: "1em",
          position: "absolute",
          bottom: "1rem",
        }}>
          <span style={{
            
          }}>리크루딩이 종료됐어요</span>
          <ServiceButton
            style={{width: "100%", height: "4rem"}}
            size={ServiceButtonSize.NORMAL}
            theme={ServiceButtonTheme.COLORED}
            mode="main"
            onClick={announceJudgement}
          >
            결과 발표하기
          </ServiceButton>
        </section>
      }
    </S.Container>
  );
};

export default RecruitManageTemplate;
