"use server";

import { Admission, Answer, SubmissionBrief, SubmissionResponse, SubmissionVote } from "@/types/Form";
import { requestGetAPI, requestPostAPI } from "../common";
import { FEServerResponse } from "../type";
import { Recruit, RecruitBrief, RecruitSearchQuery } from "@/types/Recruit";

// Recruit 관련 API
export const findRecruit = async (body: Partial<RecruitSearchQuery>) => 
  requestPostAPI<Recruit[]>("/apply/recruit/find", body);

export const getRecruitBrief = async (recruit_id: number) => 
  requestGetAPI<RecruitBrief>("/apply/recruit/status", { recruit_id });

export const getRecruitDetail = async (recruit_id: number) => 
  requestGetAPI<Recruit>(`/apply/recruit/detail`, { recruit_id });

export const getRecruitList = async () => 
  requestGetAPI<Recruit[]>("/apply/recruit/list");

export const createRecruit = async (body: Partial<Recruit>) => 
  requestPostAPI<Recruit>("/apply/recruit/create", body);

export const updateRecruitDeadline = async (recruit_id: number, deadline: string) => 
  requestPostAPI<Recruit>(`/apply/recruit/deadline`, { recruit_id, deadline });

export const voteSubmissionResult = async (recruit_id: number, submission_id: number, vote: SubmissionVote ) => 
  requestPostAPI<{submission_id: number, status: string}>(`/apply/recruit/result/vote`, { recruit_id, submission_id, vote });

export const openRecruitResult = async (recruit_id: number) => 
  requestPostAPI<{message: string, redirect_url: string}>(`/apply/recruit/result/open`, { recruit_id });

// Submission 관련 API
export const saveSubmission = async (recruit_id: number, submission_title: string, answers: Answer[]) => 
  requestPostAPI<SubmissionResponse>("/apply/submission/save", {
    recruit_id, submission_title, answers
  });

export const getSubmissionAnswers = async (submission_id: number) => 
  requestGetAPI<Answer[]>(`/apply/submission/${submission_id}`);

export const getSubmissionList = async (recruit_id: number) => 
  requestGetAPI<SubmissionBrief[]>(`/apply/submission/list`, { recruit_id });

export const submitSubmission = async (submission_id: number) => 
  requestPostAPI(`/apply/submission/submit`, { submission_id });

// Admission 관련 API
export const getAdmissionList = async (recruit_id: number) => 
  requestGetAPI<Admission[]>(`/apply/admission/list`, { recruit_id });

export const getAdmissionResult = async (recruit_id: number) => 
  requestGetAPI<Admission[]>(`/apply/admission/result`, { recruit_id });

// File 관련 API
export const uploadFile = async (body: File) => 
  requestPostAPI<File>("/apply/file/upload", body);

export const downloadFile = async (file_id: number) => 
  requestGetAPI<File>(`/apply/file/download/${file_id}`);

export const deleteFile = async (file_id: number) => 
  requestPostAPI(`/apply/file/delete/${file_id}`);
