"use server";

import * as memberAPI from "@/api/Member";
import * as clubAPI from "@/api/Club";

import HomeTemplate from "@/templates/Home";
import ErrorTemplate from "@/templates/Error";
import { Member } from "@/types/Member";
import { Club } from "@/types/Club";

export default async function Home() {
  const clubs = await clubAPI.getMemberClub();
  const member = await memberAPI.getLoginedMember();

  if (!clubs.result || !member.result) 
    return <ErrorTemplate message="데이터 조회에 실패했어요. 잠시 후 다시 시도해주세요."/>

  if (!clubs.data.success || !member.data.success) 
    return <ErrorTemplate message="데이터 조회에 실패했어요. 잠시 후 다시 시도해주세요."/>

  const clubs_data = clubs.data.data;
  const member_data = member.data.data as Member;

  return <HomeTemplate
    member_club_brief={clubs_data}
    member={member_data}
  />;
}