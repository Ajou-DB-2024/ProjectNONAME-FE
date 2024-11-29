import { useState } from "react";

import { SelectionType } from "../type";

type useSelectState = () => [SelectionType | undefined, (selection: SelectionType) => any];
export const useSelectState = () => {
  const [ selected, setSelected ] = useState<SelectionType | undefined>(undefined);

  const onSelectionClick = (selection: SelectionType) => {
    if (selected === selection)
      return setSelected(undefined);
    
    return setSelected(selection);``
  }

  return [ selected, onSelectionClick ] as ReturnType<useSelectState>;
}