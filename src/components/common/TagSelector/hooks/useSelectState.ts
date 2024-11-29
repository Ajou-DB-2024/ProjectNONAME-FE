import { useState } from "react";

import { SelectionType } from "../type";

type useSelectState = (
  handler?: (selection: SelectionType) => any
) => [SelectionType | undefined, (selection: SelectionType) => any];

export const useSelectState: useSelectState = (handler) => {
  const [ selected, setSelected ] = useState<SelectionType | undefined>(undefined);

  const onSelectionClick = (selection: SelectionType) => {
    if (selected === selection) setSelected(undefined);
    else setSelected(selection);

    if (handler) handler(selection);
    return;
  }

  return [ selected, onSelectionClick ];
}