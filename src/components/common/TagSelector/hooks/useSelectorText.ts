import { useEffect, useState } from "react"

import { SelectionType } from "../type";

type useSelectorText = (category: string, selected: SelectionType[]) => [string]
export const useSelectorText: useSelectorText = (category, selected) => {
  const [ text, setText ] = useState<string>("");
  
  useEffect(() => {
    switch(selected.length) {
      case 0:
        setText(`#${category}`); break;
      case 1:
        setText(`#${category}: ${selected[0].text}`); break;
      default:
        return setText(`#${category}: ${selected.length}개 선택됨`);
    }
  }, [ selected ]);

  return [ text ];
}