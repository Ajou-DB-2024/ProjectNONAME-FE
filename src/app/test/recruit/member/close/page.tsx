"use server";

import RecruitManageTemplate from "@/templates/RecruitManageTemplate";

export default async function RecruitManagePage() {
  const mockData = {
    remainingTime: "3일 23시간 16분 10초",
    applicantCount: 100,
    applicants: [
      { name: "나데베", grade: "1학년", department: "소프트웨어융합대학 사이버보안학과", resumeLink: "#" },
      { name: "나지원", grade: "2학년", department: "소프트웨어융합대학 웹프로그래밍과", resumeLink: "#" },
      { name: "가가가", grade: "2학년", department: "소프트웨어융합대학 웹프로그래밍과", resumeLink: "#" },
      { name: "나나나", grade: "3학년", department: "소프트웨어융합대학 웹프로그래밍과", resumeLink: "#" },
      { name: "다다다", grade: "3학년", department: "소프트웨어융합대학 사이버보안학과", resumeLink: "#" },
      { name: "라라라", grade: "4학년", department: "소프트웨어융합대학 웹프로그래밍과", resumeLink: "#" },
      { name: "마마마", grade: "4학년", department: "소프트웨어융합대학 디지털미디어학과", resumeLink: "#" },
      { name: "바바바", grade: "1학년", department: "소프트웨어융합대학 디지털미디어학과", resumeLink: "#" },
    ],
  };

  return <RecruitManageTemplate status={false} {...mockData} />;
}
