import { useState } from "react";

import { SelectionType } from "../type";

type useSelectState = (
  multi_select: boolean,
  handler?: (selections: SelectionType[]) => any
) => [SelectionType[], (selection: SelectionType) => any];

export const useSelectState: useSelectState = (multi_select, handler) => {
  const [ selected, setSelected ] = useState<SelectionType[]>([]);

  const onSelectionClick = (selection: SelectionType) => {
    const { value } = selection;
    let update_selected = [...selected];
    
    if (selected.map(v => v.value).includes(value))
      update_selected = update_selected.filter(v => v.value !== value);
    else if (!multi_select) update_selected = [selection];
    else update_selected.push(selection);

    setSelected(update_selected);

    if (handler) handler(update_selected);
    return;
  }

  return [ selected, onSelectionClick ];
}