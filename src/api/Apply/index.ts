"use server";

import { requestGetAPI, requestPostAPI } from "../common";
import { FEServerResponse } from "../type";
import { Recruit, RecruitBrief, RecruitSearchQuery } from "@/types/Recruit";
  
export const findRecruit = async (body: Partial<RecruitSearchQuery>) => 
  requestPostAPI<Recruit[]>("/apply/recruit/find", body);

export const getRecruitBrief = async (recruit_id: number) => 
  requestGetAPI<RecruitBrief>("/apply/recruit/status", { recruit_id });