"use server";

import axiosInstance from "../connection";
import { getLoginToken, requestGetAPI } from "../common";
import { Member } from "@/types/Member";
import { Club, DBClub, JoinedClubBrief } from "@/types/Club";
import { FEServerResponse } from "../type";

export const getLoginedMember = async () => 
  // requestGetAPI<Member>("/member/profile");
  ({
    result: true,
    statusCode: 200,
    data: {
      success: true,
      data: {
        id: 1,
        name: "나데베",
        email: "im_daebae@ajou.ac.kr",
        created_at: "2024-12-06 12:12:12",
        university: {
          college: "소프트웨어융합대학",
          department: "사이버보안학과",
          major: "사이버보안전공",
          grade: "3학년"
        },
      }
    }
  });
  
export const getMemberClub = async () => 
  // requestGetAPI<{
  //   brief: JoinedClubBrief
  //   manage_clubs: DBClub[]
  // }>("/member/club");
  ({
    result: true,
    statusCode: 200,
    data: {
      success: true,
      data: {
        brief: {
          join_count: 8,
          applied_count: 12,
        },
        manage_clubs: [
          { id: 1, name: "TEST_CLUB_1" },
          { id: 2, name: "TEST_CLUB_2" },
          { id: 3, name: "TEST_CLUB_3" },
          { id: 4, name: "TEST_CLUB_4" },
          { id: 5, name: "TEST_CLUB_5" }
        ]
      }
    }
  }) as FEServerResponse<{
    brief: JoinedClubBrief
    manage_clubs: DBClub[]
  }>;