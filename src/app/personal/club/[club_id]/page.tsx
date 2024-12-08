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
    const club_response = await ClubAPI.getClub(club_id);
    if (!club_response.result) 
      throw new Error("데이터 조회에 실패했어요. 잠시 후 다시 시도해주세요.");

    if (!club_response.data.success) 
      throw new Error("데이터 조회에 실패했어요. 잠시 후 다시 시도해주세요.");

    const club: Club & { detail: ClubDetail, president: MemberBrief } = {
      ...club_response.data.data,
      club_id: club_response.data.data.id.toString(),
      club_name: club_response.data.data.name
    };
    return <ClubSpecTemplate club={club}/>;
  } catch (e: any) {
    console.error(e);
    return <ErrorTemplate message="데이터 조회에 실패했어요. 잠시 후 다시 시도해주세요."/>
  }
}