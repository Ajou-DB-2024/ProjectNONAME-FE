"use server";

import { Club, ClubDetail, ClubSearchQuery, DBClub, ExtendedDBClub, ManageClubBrief } from "@/types/Club";
import { requestGetAPI, requestPostAPI } from "../common";
import { TagCategoryGroup } from "@/types/Tag";
import { MemberBrief } from "@/types/Member";

// Club 관련 API
export const getClubBrief = async (club_id: number) => 
  requestGetAPI<ManageClubBrief>("/club/brief", { 
    club_id: club_id.toString()
  });

export const getTags = async () => 
  requestGetAPI<TagCategoryGroup[]>("/club/tags");

export const findClub = async (query: Partial<ClubSearchQuery>) => 
  requestGetAPI<ExtendedDBClub[]>("/club/find", query);

export const getClub = async (club_id: string) => 
  requestGetAPI<DBClub & { detail: ClubDetail, president: MemberBrief }>("/club/detail", {
    club_id
  });

export const getClubMembers = async (club_id: number) => 
  requestGetAPI<MemberBrief[]>(`/club/members`, { club_id });

export const updateClubDetail = async (body: Partial<ClubDetail>) => 
  requestPostAPI<ClubDetail>("/club/detailedit", body);

export const uploadClubFile = async (body: FormData) => 
  requestPostAPI(`/club/detailedit/files`, body);

export const downloadClubFile = async (file_id: number) => 
  requestGetAPI(`/club/detailedit/${file_id}`);

export const deleteClubFile = async (file_id: number) => 
  requestPostAPI(`/club/detailedit/${file_id}`);

export const createClub = async (body: Partial<Club>) => 
  requestPostAPI<Club>("/club/create", body);
