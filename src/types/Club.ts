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

export type ManageClubBrief = Club & {
  total_members: number,
  total_submissions: number
}

export const ClubType = {
  CONFERENCE: "CLUB_TYPE/CONFERENCE",
  CLUB: "CLUB_TYPE/CLUB",
} as const;
export type ClubType = typeof ClubType[ keyof typeof ClubType ]