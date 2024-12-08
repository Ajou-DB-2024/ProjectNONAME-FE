"use server";

import axiosInstance from "../connection";
import { getLoginToken, requestGetAPI } from "../common";
import { Member } from "@/types/Member";

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