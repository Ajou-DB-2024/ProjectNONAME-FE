import { useState, useEffect, useRef, HTMLAttributes, useCallback } from "react";

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
import { InputOptions } from "./type";

type ServiceInputProps = {
  onInputComplete: (value: string) => any
  options?: InputOptions
  placeholder?: string
} & HTMLAttributes<HTMLDivElement>

// components


const ServiceInput: React.FC<ServiceInputProps> = ({ onInputComplete, options, placeholder, ...props }) => {

  const [ value, setValue ] = useState<string>("");

  const onCursorOut = useCallback(() => {
    onInputComplete(value);
  }, [ value ]);

  return <S.ServiceInputBlock { ...props }>
    <S.DisplayArea>
      { options?.title && <S.InputTitle>{options?.title}</S.InputTitle> }
      { options?.maxLength && 
        <S.InputLengthArea>
          <S.InputLength $max_diff={options.maxLength-value.length}>{value.length}</S.InputLength>
          <S.InputLength $max_diff={Math.min(0, options.maxLength-value.length)}>/</S.InputLength>
          <S.InputLength $max_diff={Math.min(0, options.maxLength-value.length)}>{options.maxLength}</S.InputLength>
        </S.InputLengthArea> 
      }
    </S.DisplayArea>
    <S.InputArea>
      <S.InputTag type="string" placeholder={placeholder}
        value={value} onChange={(e) => setValue(e.target.value)}
        onBlur={ onCursorOut }
      />
    </S.InputArea>
  </S.ServiceInputBlock>
};

export default ServiceInput