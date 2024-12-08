"use server";

import { requestGetAPI } from "../common";
import { FEServerResponse } from "../type";
import { Recruit, RecruitBrief, RecruitSearchQuery } from "@/types/Recruit";
  
export const findRecruit = async (query: Partial<RecruitSearchQuery>) => 
  requestGetAPI<Recruit[]>("/apply/recruit/find", query);

export const getRecruitBrief = async (recruit_id: number) => 
  requestGetAPI<RecruitBrief>("/apply/recruit/status", { recruit_id });