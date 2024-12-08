import { ReferencedDBClub } from "./Club"

export type Recruit = {
  recruit_id: number
  recruit_name: string
  start_date: string
  end_date?: string
  club: ReferencedDBClub
}

export type RecruitSearchQuery = {
  recruit_name: string,
  club_id: number,
  tag_id: number,
}

export type RecruitBrief = {
  total_applicants: number,
  draft_count: number,
  end_date: string
}