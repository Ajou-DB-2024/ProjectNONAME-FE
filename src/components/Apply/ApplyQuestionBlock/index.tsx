import { useState, useEffect, useRef } from "react";

import * as S from './style';
import * as C from '@/constants';

// global state
// import states from "@/core/zustand/states";

// assets
import {  } from "@tabler/icons-react"

// API
// import dataAPI from "@data/index"

// constants

// types
type ApplyQuestionBlockProps = {
  index: number,
  question: string
}

// components


const ApplyQuestionBlock: React.FC<ApplyQuestionBlockProps> = ({ index, question }) => {
  return <S.QuestionBlock>
    <h3>Q{index}</h3>
    <h3>{question}</h3>
  </S.QuestionBlock>
};

export default ApplyQuestionBlock