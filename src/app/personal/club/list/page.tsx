"use server";

import { ClubAPI } from "@/api";

import ClubListTemplate from "@/templates/Club/List/ClubListTemplate";
import ErrorTemplate from "@/templates/Error";

export default async function ClubList() {
  try {
    const filter_response = await ClubAPI.getTags();
    if (!filter_response.result) 
      throw new Error("데이터 조회에 실패했어요. 잠시 후 다시 시도해주세요.");

    if (!filter_response.data.success) 
      throw new Error("데이터 조회에 실패했어요. 잠시 후 다시 시도해주세요.");
      
    const filters = filter_response.data.data
      .map(v => ({
        category: {
          id: v.category.id.toString(),
          text: v.category.text
        },
        selections: v.selections.map(selection => ({
          text: selection.name,
          value: selection.id
        }))
      }))
    ;

    return <ClubListTemplate filters={filters}/>;
  } catch (e: any) {
    console.error(e);
    return <ErrorTemplate message="데이터 조회에 실패했어요. 잠시 후 다시 시도해주세요."/>
  }
}