import { SelectionType } from "../TagSelector/type"

type FilterCategory = {
  id: string,
  text: string
};

export type RecruitFilterOption = {
  is_multi?: boolean,
  category: FilterCategory,
  selections: SelectionType[]
}

export type FilterState = {
  [ keys in string ]: {
    category_name: string
  } & (
    {
      is_multi: true,
      selected: SelectionType[]
    } | {
      is_multi: false,
      selected: SelectionType | undefined
    }
  )
}
