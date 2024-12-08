"use server";

import axiosInstance from "../connection";
import { getLoginToken, requestGetAPI } from "../common";
import { Member } from "@/types/Member";
import { Club, DBClub, JoinedClubBrief } from "@/types/Club";
import { FEServerResponse } from "../type";

export const getLoginedMember = async () => 
  requestGetAPI<{result: boolean, is_logined: boolean, logined_member: Member}>("/member/profile");
  
export const getMemberClub = async () => 
  requestGetAPI<{
    brief: JoinedClubBrief
    manage_clubs: DBClub[]
  }>("/member/club");