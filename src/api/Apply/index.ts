"use server";

import { requestGetAPI } from "../common";
import { FEServerResponse } from "../type";
import { Recruit, RecruitBrief, RecruitSearchQuery } from "@/types/Recruit";
  
export const findRecruit = async (query: Partial<RecruitSearchQuery>) => 
  // requestGetAPI<Recruit[]>("/apply/recruit/find", query);
  ({
    result: true,
    statusCode: 200,
    data: {
      success: true,
      data: [
        {
          "recruit_id": 4,
          "recruit_name": "strin980080989g",
          "start_date": "2024-12-06T16:09:01",
          "end_date": "2025-12-06T16:09:01",
          "club": {
            "club_id": 1,
            "club_name": "Whois"
          }
        },
        {
          "recruit_id": 3,
          "recruit_name": "s8767utring",
          "start_date": "2024-12-06T15:54:00",
          "end_date": "2027-12-06T15:54:00",
          "club": {
            "club_id": 1,
            "club_name": "Whois"
          }
        },
        {
          "recruit_id": 2,
          "recruit_name": "즉시마감기능 test",
          "start_date": "2024-12-05T04:29:57",
          "end_date": "2024-12-05T04:35:01",
          "club": {
            "club_id": 1,
            "club_name": "Whois"
          }
        },
        {
          "recruit_id": 1,
          "recruit_name": "리크루딩 1번입니다.",
          "start_date": "2024-12-04T19:54:36",
          "end_date": "2024-12-06T23:37:18",
          "club": {
            "club_id": 1,
            "club_name": "Whois"
          }
        }
      ]
    }
  }) as FEServerResponse<Recruit[]>;

export const getRecruitBrief = async (id: number) => 
  // requestGetAPI<RecruitBrief>("/apply/recruit/status", id);
  ({
    result: true,
    statusCode: 200,
    data: {
      success: true,
      data: {
        "total_applicants": Math.floor(Math.random() * 100) % 10,
        "draft_count": Math.floor(Math.random() * 100) % 10,
        "end_date": "2024-12-06T23:37:18"
      }
    }
  }) as FEServerResponse<RecruitBrief>;