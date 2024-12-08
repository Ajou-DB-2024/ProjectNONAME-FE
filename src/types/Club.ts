export type Club = {
  club_id: string,
  club_name: string
}

export type DBClub = {
  id: number,
  name: string
}

export type JoinedClubBrief = {
  join_count: number,
  applied_count: number
}

export const ClubType = {
  CONFERENCE: "CLUB_TYPE/CONFERENCE",
  CLUB: "CLUB_TYPE/CLUB",
} as const;
export type ClubType = typeof ClubType[ keyof typeof ClubType ]