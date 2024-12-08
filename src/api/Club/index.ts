"use server";

import { Club, DBClub, JoinedClubBrief } from "@/types/Club";
import { requestGetAPI } from "../common";
import { FEServerResponse } from "../type";

export const getMemberClub = async () => 
  // requestGetAPI<Club[]>("/member/club");
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