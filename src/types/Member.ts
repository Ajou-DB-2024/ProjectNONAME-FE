import { University } from "./University"

export type Member = {
  id: number,
  name: string,
  email: string,
  major: string,
  created_at: string,
  university: University
}