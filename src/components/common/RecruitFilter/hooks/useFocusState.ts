import { useEffect, useState } from "react";

type useFoucsState = (init?: number) => [ number, (index: number) => any ];

export const useFocusState: useFoucsState = (init = -1) => {
  const [ focus_index, setFocusIndex ] = useState<number>(init);

  const onClick = (index: number) => {
    if ( index === focus_index ) return setFocusIndex(-1);
    return setFocusIndex(index);
  }

  useEffect(() => {
    setFocusIndex(init);
  }, [ init ]);

  return [ focus_index, onClick ];
}