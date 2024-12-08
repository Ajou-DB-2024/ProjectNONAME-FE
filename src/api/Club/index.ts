"use server";

import { ClubSearchQuery, ExtendedDBClub, ManageClubBrief } from "@/types/Club";
import { requestGetAPI } from "../common";
import { RecruitSearchQuery } from "@/types/Recruit";
import { TagCategoryGroup } from "@/types/Tag";

export const getClubBrief = async (club_id: number) => 
  requestGetAPI<ManageClubBrief>("/club/brief", { 
    club_id: club_id.toString()
  });

export const getTags = async () => 
  requestGetAPI<TagCategoryGroup[]>("/club/tags");

export const findClub = async (query: Partial<ClubSearchQuery>) => 
    requestGetAPI<ExtendedDBClub[]>("/club/find", query)