export type InputOptions = Partial<{
  title: string
  maxLength: number,
  essential: boolean,
  type: "text" | "date" | "textarea"
}>