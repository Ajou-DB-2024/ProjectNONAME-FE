"use server";

import { ClubSearchQuery, ManageClubBrief } from "@/types/Club";
import { requestGetAPI } from "../common";
import { RecruitSearchQuery } from "@/types/Recruit";

export const getClubBrief = async (club_id: number) => 
  requestGetAPI<ManageClubBrief>("/club/brief", { 
    club_id: club_id.toString()
  });

export const getTags = async () => 
  requestGetAPI<ManageClubBrief>("/club/tags");

export const findClub = async (query: Partial<ClubSearchQuery>) => 
    requestGetAPI<ManageClubBrief>("/club/find", query)