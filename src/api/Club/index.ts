"use server";

import { ManageClubBrief } from "@/types/Club";
import { requestGetAPI } from "../common";

export const getClubBrief = async (club_id: number) => 
  // requestGetAPI<ManageClubBrief>("/club/brief", { 
  //   club_id: club_id.toString()
  // });
  ({
    result: true,
    statusCode: 200,
    data: {
      success: true,
      data: {
        total_members: 10,
        total_submissions: 8
      }
    }
  });