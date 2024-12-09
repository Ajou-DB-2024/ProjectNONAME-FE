import { useState, useEffect, useRef } from "react";

import * as S from './style';
import * as C from '@/constants';

// global state
// import states from "@/core/zustand/states";

// assets
import {  } from "@tabler/icons-react"
import ServiceInput from "@/components/common/ServiceInput";

// API
// import dataAPI from "@data/index"

// constants

// types
type ApplyAnswerBlockProps = {
  index: number,
  maxLength: number,
  value?: string,
  onInputComplete?: ( value: string ) => any
}

// components


const ApplyAnswerBlock: React.FC<ApplyAnswerBlockProps> = ({ index, maxLength, value, onInputComplete }) => {

  const handleInput = (value: string) => {
    if (onInputComplete) onInputComplete(value);
  }

  return <ServiceInput
    style={{ height: "10em" }}
    placeholder={`여기에 답변 입력 (최대 ${maxLength}자)`}
    options={{ title: `A${index}`, maxLength, type: "textarea" }}
    value={value}
    onInputComplete={handleInput}
  />;
}

export default ApplyAnswerBlock;