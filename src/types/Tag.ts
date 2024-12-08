export type Tag = {
  id: number,
  name: string
}

export type TagCategory = {
  id: number,
  text: string
}

export type TagCategoryGroup = {
  category: TagCategory,
  selections: Tag[]
}