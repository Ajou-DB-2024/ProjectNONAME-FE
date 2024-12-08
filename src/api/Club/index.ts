"use server";

import { Club, ClubDetail, ClubSearchQuery, DBClub, ExtendedDBClub, ManageClubBrief } from "@/types/Club";
import { requestGetAPI } from "../common";
import { RecruitSearchQuery } from "@/types/Recruit";
import { TagCategoryGroup } from "@/types/Tag";
import { MemberBrief } from "@/types/Member";

export const getClubBrief = async (club_id: number) => 
  requestGetAPI<ManageClubBrief>("/club/brief", { 
    club_id: club_id.toString()
  });

export const getTags = async () => 
  requestGetAPI<TagCategoryGroup[]>("/club/tags");

export const findClub = async (query: Partial<ClubSearchQuery>) => 
    requestGetAPI<ExtendedDBClub[]>("/club/find", query)

export const getClub = async (club_id: string) => 
    requestGetAPI<DBClub & { detail: ClubDetail, president: MemberBrief }>("/club/detail", {
      club_id
    })