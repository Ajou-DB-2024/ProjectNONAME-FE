import { useEffect, useState } from "react";
import { SelectionType } from "../../TagSelector/type";
import { FilterState, RecruitFilterOption } from "../type";

type useFilterState = (
  filters: RecruitFilterOption[],
  handler?: (newFilterState: FilterState) => any
) => [FilterState, (categoryId: string, selection: SelectionType[]) => any];

export const useFilterState: useFilterState = (filters, handler) => {
  const [ select_states, setSelectedStates ] = useState<FilterState>({});

  useEffect(() => {
    const new_state = {} as any;
    filters.forEach(({ category, is_multi = false }) => {
      new_state[category.id] = {
        category_name: category.text,
        is_multi, selected: is_multi ? [] : undefined
      };
    });
    setSelectedStates(new_state);
  }, [ filters ]);

  const updateState = (categoryId: string, selections: SelectionType[]) => {
    const select_state = select_states[categoryId];
    
    if (select_state.is_multi) {
      select_state.selected = selections;
    } else {
      select_state.selected = selections[0] || undefined;
    }

    const updated_states = { ...select_states, [categoryId]: select_state };
    setSelectedStates(updated_states);
    return updated_states;
  }

  const onSelectorUpdated = (categoryId: string, selections: SelectionType[]) => {
    const new_states = updateState(categoryId, selections);
    if (handler) handler(new_states);
    return;
  }

  return [ select_states, onSelectorUpdated ];
}