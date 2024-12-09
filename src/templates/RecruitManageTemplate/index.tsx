"use client";

import React from "react";
import * as S from "./style";
import SummaryBox from "@/components/SummaryBox";
import OptionsSection from "@/components/OptionsSelection";
import ApplicantList from "@/components/ApplicantList";
import PageNavigation from "@/components/common/PageNavigation";

const RecruitManageTemplate: React.FC<{
  remainingTime: string;
  applicantCount: number;
  applicants: Array<{ name: string; grade: string; department: string; resumeLink: string }>;
}> = ({ remainingTime, applicantCount, applicants }) => {
  return (
    <S.Container>
      <PageNavigation info={{prev: "리크루딩 관리", curr: "2024-2 Whois 신입회원 리크루딩"}}/>
      <SummaryBox remainingTime={remainingTime} applicantCount={applicantCount} />
      <OptionsSection />
      <ApplicantList applicants={applicants} />
    </S.Container>
  );
};

export default RecruitManageTemplate;
