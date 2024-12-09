"use server";

import RecruitManageTemplate from "@/templates/RecruitManageTemplate";

export default async function RecruitManagePage() {
  const mockData = {
    remainingTime: "3일 23시간 16분 10초",
    applicantCount: 100,
    applicants: [
      { name: "나해머", grade: "2학년", department: "소프트웨어융합대학 사이버보안학과", resumeLink: "#" },
      { name: "나해머", grade: "2학년", department: "소프트웨어융합대학 사이버보안학과", resumeLink: "#" },
      { name: "나해머", grade: "2학년", department: "소프트웨어융합대학 사이버보안학과", resumeLink: "#" },
      { name: "나해머", grade: "2학년", department: "소프트웨어융합대학 사이버보안학과", resumeLink: "#" },
      { name: "나해머", grade: "2학년", department: "소프트웨어융합대학 사이버보안학과", resumeLink: "#" },
      { name: "나해머", grade: "2학년", department: "소프트웨어융합대학 사이버보안학과", resumeLink: "#" },
      { name: "나해머", grade: "2학년", department: "소프트웨어융합대학 사이버보안학과", resumeLink: "#" },
      { name: "나해머", grade: "2학년", department: "소프트웨어융합대학 사이버보안학과", resumeLink: "#" },
    ],
  };

  return <RecruitManageTemplate {...mockData} />;
}
