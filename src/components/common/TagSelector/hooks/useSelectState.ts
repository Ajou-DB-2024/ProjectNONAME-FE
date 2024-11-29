import { useState } from "react";

import { SelectionType } from "../type";

type useSelectState = (
  multi_select: boolean,
  handler?: (selection: SelectionType) => any
) => [SelectionType[], (selection: SelectionType) => any];

export const useSelectState: useSelectState = (multi_select, handler) => {
  const [ selected, setSelected ] = useState<SelectionType[]>([]);

  const onSelectionClick = (selection: SelectionType) => {
    const { value } = selection;
    
    if (selected.map(v => v.value).includes(value))
        setSelected(p => p.filter(v => v.value !== value));
    else if (!multi_select) setSelected([selection]);
    else setSelected(p => [...p, selection]);

    if (handler) handler(selection);
    return;
  }

  return [ selected, onSelectionClick ];
}