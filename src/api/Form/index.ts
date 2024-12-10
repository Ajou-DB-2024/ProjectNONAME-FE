"use server";

import { RecruitForm, ClubForm, Question, Form } from "@/types/Form";
import { requestGetAPI, requestPostAPI } from "../common";
import { FEServerResponse } from "../type";

export const getRecruitForms = async (recruit_id: number) => 
  requestGetAPI<RecruitForm>(`/form/recruit/${recruit_id}`);

export const getClubForms = async (club_id: number) => 
  requestGetAPI<ClubForm[]>(`/form/club/${club_id}`);

export const createForm = async (title: string, questions: Question[]) => 
  requestPostAPI<Form>("/form/create", {title, questions});
