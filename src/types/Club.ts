export type Club = {
  club_id: string,
  club_name: string
}

export type DBClub = {
  id: number,
  name: string
}

export type ReferencedDBClub = {
  club_id: number,
  club_name: string
}

export type JoinedClubBrief = {
  join_count: number,
  applied_count: number
}

export type ExtendedClub = Club & {
  type: ClubType,
  depart: string
}

export type ExtendedDBClub = DBClub & {
  club_type: ClubType,
  club_depart: string
}

export type ClubDetail = {
  description?: string
  study_count?: number
  award_count?: number
  edu_count?: number
  event_count?: number
  established_date?: string
}

export type ManageClubBrief = Club & {
  total_members: number,
  total_submissions: number
}

export const ClubType = {
  CONFERENCE: "CLUB_TYPE/CONFERENCE",
  CLUB: "CLUB_TYPE/CLUB",
} as const;
export type ClubType = typeof ClubType[ keyof typeof ClubType ]

export type ClubSearchQuery = {
  club_name: string,
  tag_id: string
}