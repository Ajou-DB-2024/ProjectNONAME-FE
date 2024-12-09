"use client";

import React from "react";
import * as S from "./style";
import RecruitingBasicInfo from "@/components/RecruitBasicInfo";
import CommonButtonGroup from "@/components/CommonButtonGroup";
import ServiceButton from "@/components/common/ServiceButton";
import { ServiceButtonSize, ServiceButtonTheme } from "@/components/common/ServiceButton/type";
import ServiceInput from "@/components/common/ServiceInput";
import PageNavigation from "@/components/common/PageNavigation";

const RecruitCreateTemplate: React.FC = () => {
  return (
    <S.Container>
      <PageNavigation info={{prev: "Whois", curr: "새로운 리크루딩"}}/>
      <S.Section>
        <S.SectionTitle>
          <h3>리크루딩 기본정보</h3>
          <h5 style={{color: "#aaaaaa"}}>리크루딩에 대한 기본정보를 입력해주세요</h5>
        </S.SectionTitle>
        <ServiceInput 
          options={{
            title: "리크루딩 이름",
            maxLength: 160,
          }}
          placeholder="리크루딩 이름 (ex: 2024-2 Whois 신입회원 리크루딩)"
          onInputComplete={() => console.log("sef")}
        />
        <ServiceInput 
          options={{
            title: "리크루딩 진행기간",
            type: "date"
          }}
          placeholder="시간 (YYYY-MM-DD HH:MM)"
          onInputComplete={() => console.log("sef")}
        />
      </S.Section>
      <S.Section>
        <S.SectionTitle>
          <h3>동아리 소개</h3>
          <h5 style={{color: "#aaaaaa"}}>동아리를 소개해주세요</h5>
        </S.SectionTitle>
        <ServiceButton
          size={ServiceButtonSize.NORMAL}
          theme={ServiceButtonTheme.COLORED}
          mode="main"
        >
          소개페이지 검토완료
        </ServiceButton>
      </S.Section>
      <S.Section>
        <S.SectionTitle>
          <h3>지원폼 설정</h3>
          <h5 style={{color: "#aaaaaa"}}>지원자에게 어떤 질문을 해볼까요?</h5>
        </S.SectionTitle>
        <ServiceButton
          size={ServiceButtonSize.NORMAL}
          theme={ServiceButtonTheme.COLORED}
          mode="main"
        >
          선택된 폼: Whois 기본 지원서 양식
        </ServiceButton>
      </S.Section>
      <section style={{
        width: "100%",
        padding: "0 1.5em",
        marginBottom: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems:"center",
        justifyContent:"flex-end",
        gap: "1em"
      }}>
        <span style={{
          
        }}>리크루딩 생성이 준비되었어요</span>
        <ServiceButton
          style={{width: "100%", height: "4rem"}}
          size={ServiceButtonSize.NORMAL}
          theme={ServiceButtonTheme.COLORED}
          mode="main"
        >
          리크루딩 생성하기
        </ServiceButton>
      </section>
    </S.Container>
  );
};

export default RecruitCreateTemplate;
