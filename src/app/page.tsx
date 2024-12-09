"use server";

import * as memberAPI from "@/api/Member";
import * as clubAPI from "@/api/Club";

import HomeTemplate from "@/templates/Home";
import ErrorTemplate from "@/templates/Error";
import { Member } from "@/types/Member";
import { Club } from "@/types/Club";
import { ClubAPI } from "@/api";

export default async function Home() {
  try {
    const member = await memberAPI.getLoginedMember();
    const member_clubs = await memberAPI.getMemberClub();
    const filter_response = await ClubAPI.getTags();

    console.log(member);

    if (!member_clubs.result || !member.result || !filter_response.result) 
      throw new Error("데이터 조회에 실패했어요. 잠시 후 다시 시도해주세요.");

    if (!member_clubs.data.success || !member.data.success || !filter_response.data.success) 
      throw new Error("데이터 조회에 실패했어요. 잠시 후 다시 시도해주세요.");


    const member_clubs_data = member_clubs.data.data;
    const member_data = member.data.data?.logined_member;

    const manage_clubs_data = await Promise.all(
      member_clubs_data.manage_clubs.map( async (club) => {
        const brief_res = await clubAPI.getClubBrief(club.id);
        if ( !brief_res.result ) throw new Error("관리정보 조회 중 오류가 발생했어요.");
        if ( !brief_res.data.success )  throw new Error("관리정보 조회 중 오류가 발생했어요.");

        return { [ club.id.toString() ]: {
          ...brief_res.data.data,
          club_id: club.id.toString(), 
          club_name: club.name 
        } };
      } )
    )

    const filters = filter_response.data.data
      .map(v => ({
        category: {
          id: v.category.id.toString(),
          text: v.category.text
        },
        selections: v.selections.map(selection => ({
          text: selection.name,
          value: selection.id
        }))
      }))
    ;

    return <HomeTemplate
      manage_club_briefs={manage_clubs_data.reduce((a, b) => ({ ...a, ...b }), ({}))}
      member_club_brief={member_clubs_data}
      member={member_data}
      filters={filters}
    />;
  } catch (e: any) {
    console.error(e);
    return <ErrorTemplate message="데이터 조회에 실패했어요. 잠시 후 다시 시도해주세요."/>
  }
}