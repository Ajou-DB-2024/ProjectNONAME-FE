export const QuestionType = {
  WRITE_SHORT: "QUESTION_TYPE/WRITE/SHORT",
  WRITE_LONG: "QUESTION_TYPE/WRITE/LONG",
  NUMBER: "QUESTION_TYPE/NUMBER",
  SELECT_SINGLE: "QUESTION_TYPE/SELECT/SINGLE",
  SELECT_MULTI: "QUESTION_TYPE/SELECT/MULTI",
  FILE: "QUESTION_TYPE/FILE"
} as const;
export type QuestionType = typeof QuestionType[ keyof typeof QuestionType ]

export const SubmissionVote = {
  ACCEPTED: "SUBMISSION_VOTE/ACCEPTED",
  REJECTED: "SUBMISSION_VOTE/REJECTED"
} as const;
export type SubmissionVote = typeof SubmissionVote[ keyof typeof SubmissionVote ]

export type Question = {
  title: string,
  type: QuestionType,
  is_required: boolean
}

export type Form = {
  id: number,
  title: string,
  questions: Question[]
}

type ReferenceForm = {
  form_id: number,
  title: string,
  created_at: string,// "2024-12-10T01:47:01",
}

export type RecruitForm = ReferenceForm & {
  questions: Question[]
}

export type ClubForm = ReferenceForm & {
  recruits: Question
}

export type SubmissionBrief = {
  submission_id: number,
}

export type SubmissionResponse = {
  message: string,
  redirect_url: string,
  submission_id: number
}

export type Answer = {
  question_title: string,
  answer_value: string
}

export type Admission =     {
  recruit_name: string,
  club_name: string,
  club_type: string,
  pending_submissions: number,
  announced_submissions: number
}