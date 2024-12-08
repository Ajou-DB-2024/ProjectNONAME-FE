"use client";

import ServiceLogoSection from "@/components/Login/ServiceLogoSection";

import * as S from "./style";

import * as JoinAPI from "@/api/Join";

import states from "@/core/zustand/states";
import ServiceButton from "@/components/common/ServiceButton";
import { ServiceButtonSize, ServiceButtonTheme } from "@/components/common/ServiceButton/type";
import GlobalAlert from "@/components/common/GlobalAlert";
import { GlobalAlertType } from "@/components/common/GlobalAlert/type";

const JOIN_TERMS = {
  SERVICE_POLICY: "서비스 이용약관",
  PRIVATE_INFO_MANAGEMENT: "개인정보 처리방침",
  PRIVATE_INFO_ABROAD_MANAGEMENT: "개인정보 해외이전 처리약관"
} as const;
type JOIN_TERMS = typeof JOIN_TERMS[ keyof typeof JOIN_TERMS ]

export default function JoinAgreementTemplate() {

  const { errorAlert, alert } = states.useGlobalAlertQueue();

  const onTermViewClick = async (term: JOIN_TERMS) => {
    const { result, data } = await JoinAPI.getTerm(term);
    alert({
      type: "GLOBAL_ALERT_TYPE/NORMAL",
      contents: {
        title: term,
        desc: data,
        buttons: [
          { text: "확인", value: "", mode: "main", theme: ServiceButtonTheme.COLORED, onClick: () => true }
        ]
      }
    })
    if (!result)
      return errorAlert()
  }

  return <S.JoinAgreementTemplate>
    <S.Section>
      <ServiceLogoSection/>
      <S.ServiceNotiArea>
        <section className="noti-text">
          <p>시작하기 위해</p>
          <p>약관에 동의가 필요해요</p>
        </section>
        <section className="terms">
          <a onClick={() => onTermViewClick(JOIN_TERMS.SERVICE_POLICY)}>서비스 이용약관 (2024년 11월 개정, 2024년 12월 시행)</a>
          <a onClick={() => onTermViewClick(JOIN_TERMS.PRIVATE_INFO_MANAGEMENT)}>개인정보 처리방침 (2024년 11월 개정, 2024년 12월 시행)</a>
          <a onClick={() => onTermViewClick(JOIN_TERMS.PRIVATE_INFO_ABROAD_MANAGEMENT)}>개인정보 해외이전 (2023년 5월 개정, 2023년 8월 시행)</a>
        </section>
      </S.ServiceNotiArea>
    </S.Section>
    <S.ButtonArea>
      <p>
        <span>본 서비스 이용을 위해, 사용자는 본 서비스의 </span>
        <a onClick={() => onTermViewClick(JOIN_TERMS.SERVICE_POLICY)}>서비스 이용약관</a>
        <span> 및 </span>
        <a onClick={() => onTermViewClick(JOIN_TERMS.PRIVATE_INFO_MANAGEMENT)}>개인정보처리방침</a>
        <span>, </span>
        <a onClick={() => onTermViewClick(JOIN_TERMS.PRIVATE_INFO_ABROAD_MANAGEMENT)}>개인정보 해외이전</a>
        <span>등의 필수조항들에 동의하였음을 확인합니다.</span>
      </p>
      <ServiceButton
        size={ServiceButtonSize.NORMAL} 
        theme={ServiceButtonTheme.COLORED} 
        mode={"main"}
        style={{width: "100%"}}
        onClick={() => (location.href = "/")}
        >약관동의</ServiceButton>
    </S.ButtonArea>
  </S.JoinAgreementTemplate>
}