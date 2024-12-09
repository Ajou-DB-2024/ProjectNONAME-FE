"use server";

import { ClubAPI } from "@/api";
import ClubSpecTemplate from "@/templates/Club/ClubSpecTemplate";
import ErrorTemplate from "@/templates/Error";
import { Club, ClubDetail } from "@/types/Club";
import { MemberBrief } from "@/types/Member";

export default async function ClubSpec({
  params,
}: {
  params: Promise<{ club_id: string }>
}) {
  const {club_id} = await params;
  
  try {
    return <ClubSpecTemplate club={{
      club_id: "1",
      club_name: "seijfiose",
      detail: {
        description: `
          sejfoisjfoesifse
          sejfoisjfoesifse
          sejfoisjfoesifse
          sejfoisjfoesifse
          sejfoisjfoesifse
          sejfoisjfoesifse
          sejfoisjfoesifse
          sejfoisjfoesifse
          sejfoisjfoesifse
          sejfoisjfoesifse
          sejfoisjfoesifse
          sejfoisjfoesifse
        `,
        study_count: 10,
        award_count: 10,
        edu_count: 10,
        event_count: 10,
        established_date: undefined,
      },
      president: {
        id: 1,
        name: "나데베",
        email: "test@ajou.ac.kr"
      }
    }}/>;
  } catch (e: any) {
    console.error(e);
    return <ErrorTemplate message="데이터 조회에 실패했어요. 잠시 후 다시 시도해주세요."/>
  }
}