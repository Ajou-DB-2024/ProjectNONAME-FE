import { useState, useEffect, useRef } from "react";

import * as S from './style';
import * as C from '@/constants';

// global state
// import states from "@/core/zustand/states";

// assets
import { IconChevronDown, IconMenuOrder } from "@tabler/icons-react"

// API
// import dataAPI from "@data/index"

// constants

// types
type QuestionBlockProps = {
  index: number,
  essential?: boolean,
  onChange?: (prop: { 
    essntial: boolean, 
    content: string, 
    type: "write" | "select" | "truefalse" 
  }) => any
  onOpen?: (index: number) => any
}

// components


const QuestionBlock: React.FC<QuestionBlockProps> = ({ index, essential = false, onChange, onOpen }) => {

  const [ is_open, setIsOpen ] = useState<boolean>(false);
  
  useEffect(() => {
    if (is_open && onOpen) onOpen(index);
  }, [ is_open ]);

  return <S.Content key={`QID_${index}`}>
    <S.Section>
      <IconMenuOrder/>
      <h3>{`문항${index+1}`}</h3>
      <h5>{essential ? "필수" : "선택"}</h5>
    </S.Section>
    <S.IconDown $turn={is_open}/>
  </S.Content>
};

export default QuestionBlock