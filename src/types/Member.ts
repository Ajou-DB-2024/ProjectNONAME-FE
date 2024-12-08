import { University } from "./University"

export type MemberBrief = {
  id: number,
  name: string
  email: string
}

export type Member = MemberBrief & {
  created_at: string,
  university: University
}