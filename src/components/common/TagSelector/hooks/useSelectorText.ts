import { useEffect, useState } from "react"

import { SelectionType } from "../type";

type useSelectorText = (category: string, selected: SelectionType | undefined) => [string]
export const useSelectorText: useSelectorText = (category, selected) => {
  const [ text, setText ] = useState<string>("");
  
  useEffect(() => {
    if (!selected) 
      return setText(`#${category}`);

    return setText(`#${category}: ${selected.text}`);
  }, [ selected ]);

  return [ text ];
}