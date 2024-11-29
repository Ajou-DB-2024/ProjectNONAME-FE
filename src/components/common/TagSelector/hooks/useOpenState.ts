import { useState } from "react";

type useOpenState = (init?: boolean) => [ boolean, () => void ];

export const useOpenState: useOpenState = (init = false) => {
  const [ is_open, setIsOpen ] = useState<boolean>(init);

  const onSelectorClick = () => {
    return setIsOpen(p => !p);
  }

  return [ is_open, onSelectorClick ];
}