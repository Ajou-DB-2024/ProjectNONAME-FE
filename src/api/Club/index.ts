"use server";

import { ClubSearchQuery, ManageClubBrief } from "@/types/Club";
import { requestGetAPI } from "../common";
import { RecruitSearchQuery } from "@/types/Recruit";

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

export const getTags = async () => 
  // requestGetAPI<ManageClubBrief>("/club/tags");
  ({
    result: true,
    statusCode: 200,
    data: {
      success: true,
      data: [
        {
          "category": {
            "id": 1,
            "text": "학술"
          },
          "selections": [
            {
              "id": 1,
              "name": "SW개발"
            },
            {
              "id": 2,
              "name": "보안"
            },
            {
              "id": 3,
              "name": "로봇"
            },
            {
              "id": 4,
              "name": "자연과학"
            },
            {
              "id": 5,
              "name": "사회문화"
            },
            {
              "id": 6,
              "name": "역사"
            },
            {
              "id": 7,
              "name": "철학"
            },
            {
              "id": 8,
              "name": "미술"
            },
            {
              "id": 9,
              "name": "음악"
            },
            {
              "id": 10,
              "name": "체육"
            },
            {
              "id": 11,
              "name": "언어"
            },
            {
              "id": 12,
              "name": "기타"
            }
          ]
        },
        {
          "category": {
            "id": 2,
            "text": "학술"
          },
          "selections": [
            {
              "id": 13,
              "name": "미디어"
            },
            {
              "id": 14,
              "name": "요리"
            },
            {
              "id": 15,
              "name": "독서"
            },
            {
              "id": 16,
              "name": "스포츠"
            },
            {
              "id": 17,
              "name": "활동"
            },
            {
              "id": 18,
              "name": "봉사"
            },
            {
              "id": 19,
              "name": "종교"
            },
            {
              "id": 20,
              "name": "기타"
            }
          ]
        },
        {
          "category": {
            "id": 3,
            "text": "학술"
          },
          "selections": [
            {
              "id": 21,
              "name": "전체"
            },
            {
              "id": 22,
              "name": "1학년"
            },
            {
              "id": 23,
              "name": "2학년"
            },
            {
              "id": 24,
              "name": "3학년"
            },
            {
              "id": 25,
              "name": "4학년"
            }
          ]
        },
        {
          "category": {
            "id": 4,
            "text": "학술"
          },
          "selections": [
            {
              "id": 26,
              "name": "동아리"
            },
            {
              "id": 27,
              "name": "소학회"
            }
          ]
        },
        {
          "category": {
            "id": 5,
            "text": "학술"
          },
          "selections": [
            {
              "id": 28,
              "name": "기계공학과"
            },
            {
              "id": 29,
              "name": "심리학과"
            },
            {
              "id": 30,
              "name": "산업공학과"
            },
            {
              "id": 31,
              "name": "건축학과"
            },
            {
              "id": 32,
              "name": "전자공학과"
            },
            {
              "id": 33,
              "name": "사이버보안학과"
            },
            {
              "id": 34,
              "name": "경제학과"
            },
            {
              "id": 35,
              "name": "간호학과"
            },
            {
              "id": 36,
              "name": "수학과"
            },
            {
              "id": 37,
              "name": "화학공학과"
            },
            {
              "id": 38,
              "name": "경영학과"
            },
            {
              "id": 39,
              "name": "생명과학과"
            },
            {
              "id": 40,
              "name": "사학과"
            },
            {
              "id": 41,
              "name": "국어국문학과"
            },
            {
              "id": 42,
              "name": "영어영문학과"
            },
            {
              "id": 43,
              "name": "화학과"
            },
            {
              "id": 44,
              "name": "약학과"
            },
            {
              "id": 45,
              "name": "신소재공학과"
            },
            {
              "id": 46,
              "name": "e-비즈니스학과"
            },
            {
              "id": 47,
              "name": "문화콘텐츠학과"
            },
            {
              "id": 48,
              "name": "디지털미디어학과"
            },
            {
              "id": 49,
              "name": "글로벌경영학과"
            },
            {
              "id": 50,
              "name": "소프트웨어학과"
            },
            {
              "id": 51,
              "name": "물리학과"
            },
            {
              "id": 52,
              "name": "금융공학과"
            },
            {
              "id": 53,
              "name": "불어불문학과"
            },
            {
              "id": 54,
              "name": "정치외교학과"
            },
            {
              "id": 55,
              "name": "의학과"
            },
            {
              "id": 56,
              "name": "행정학과"
            },
            {
              "id": 57,
              "name": "환경안전공학과"
            },
            {
              "id": 58,
              "name": "응용화학생명공학과"
            },
            {
              "id": 59,
              "name": "건설시스템공학과"
            },
            {
              "id": 60,
              "name": "스포츠레저학과"
            },
            {
              "id": 61,
              "name": "사회학과"
            },
            {
              "id": 62,
              "name": "융합시스템공학과"
            },
            {
              "id": 63,
              "name": "국방디지털융합학과"
            },
            {
              "id": 64,
              "name": "지능형반도체공학과"
            },
            {
              "id": 65,
              "name": "AI모빌리티학과"
            },
            {
              "id": 66,
              "name": "교통시스템공학과"
            },
            {
              "id": 67,
              "name": "첨단신소재공학과"
            },
            {
              "id": 68,
              "name": "중앙동아리"
            },
            {
              "id": 69,
              "name": "종합/기타"
            }
          ]
        }
      ]
    }
  });

export const findClub = async (query: Partial<ClubSearchQuery>) => 
    // requestGetAPI<ManageClubBrief>("/club/find", query)
({
  result: true,
  statusCode: 200,
  data: {
    success: true,
    data: [
      { id: 1, name: "Whois", type: "CLUB_TYPE/CONFERENCE", depart: "소프트웨어융합대학 사이버보안학과" },
      { id: 2, name: "HaMer", type: "CLUB_TYPE/CONFERENCE", depart: "소프트웨어융합대학 사이버보안학과" },
      { id: 3, name: "ANSI", type: "CLUB_TYPE/CONFERENCE", depart: "소프트웨어융합대학 소프트웨어학과" },
      { id: 4, name: "Do-iT", type: "CLUB_TYPE/CLUB", depart: "아주대학교 동아리연합회" },
      { id: 5, name: "Whois", type: "CLUB_TYPE/CONFERENCE", depart: "소프트웨어융합대학 사이버보안학과" },
      { id: 6, name: "HaMer", type: "CLUB_TYPE/CONFERENCE", depart: "소프트웨어융합대학 사이버보안학과" },
      { id: 7, name: "ANSI", type: "CLUB_TYPE/CONFERENCE", depart: "소프트웨어융합대학 소프트웨어학과" },
      { id: 8, name: "Do-iT", type: "CLUB_TYPE/CLUB", depart: "아주대학교 동아리연합회" },
    ]
  }
})