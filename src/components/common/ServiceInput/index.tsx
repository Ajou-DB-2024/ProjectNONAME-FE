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
import ServiceButton from "../ServiceButton";
import { ServiceButtonSize, ServiceButtonTheme } from "../ServiceButton/type";

type ServiceInputProps = {
  onChange?: (value: string) => any
  onInputComplete?: (value: string) => any
  options?: InputOptions
  placeholder?: string
  value?: string
} & Omit<HTMLAttributes<HTMLDivElement>, "onChange">

// components


const ServiceInput: React.FC<ServiceInputProps> = ({ onChange, onInputComplete, options = {}, placeholder, value: basic_value, ...props }) => {

  const [ value, setValue ] = useState<string>(basic_value || "");
  const [ endDate, setEndDate ] = useState<string>("");

  useEffect(() => {
    setValue(basic_value || "");
  }, [ basic_value ]);

  useEffect(() => {
    if (onChange) onChange(value);
  }, [value]);

  const onCursorOut = useCallback(() => {
    if (options?.type === "date" && onInputComplete) onInputComplete(`${value}|${endDate}`);
    else if (onInputComplete) onInputComplete(value);
  }, [ value, endDate ]);

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
      {
        (options?.type === "date") ? <S.DateInputSectionWrap>
          <S.DateInputSection>
            <S.DateInputWrap>
              <S.InputTag type="string" placeholder={placeholder}
                value={value} onChange={(e) => setValue(e.target.value)}
                onBlur={ onCursorOut }
              />
              <h4>부터</h4>
            </S.DateInputWrap>
            <S.DateInputWrap>
              <S.InputTag type="string" placeholder={placeholder}
                value={endDate} onChange={(e) => setEndDate(e.target.value)}
                onBlur={ onCursorOut }
              />
              <h4>까지</h4>
            </S.DateInputWrap>
          </S.DateInputSection>
          <ServiceButton
            size={ServiceButtonSize.NORMAL}
            theme={ServiceButtonTheme.COLORED}
            mode="sub"
            style={{width: "100%"}}
          >
            상시지원으로 만들기
          </ServiceButton>
        </S.DateInputSectionWrap>
        : (options?.type === "textarea") ? <S.InputTextArea placeholder={placeholder}
          value={value} onChange={(e) => setValue(e.target.value)}
          onBlur={ onCursorOut }
        />
        : <S.InputTag type="string" placeholder={placeholder}
          value={value} onChange={(e) => setValue(e.target.value)}
          onBlur={ onCursorOut }
        />
      }
    </S.InputArea>
  </S.ServiceInputBlock>
};

export default ServiceInput