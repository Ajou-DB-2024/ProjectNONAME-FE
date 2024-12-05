import { useState, useEffect, useRef, HTMLAttributes } from "react";

import * as S from './style';
import * as C from '@/constants';

// assets
import {  } from "@tabler/icons-react"
import { ServiceButtonSize, ServiceButtonTheme } from "./type";

// API
// import dataAPI from "@data/index"

// constants

// types
type ServiceButtonProps = {
  size: ServiceButtonSize,
  theme: ServiceButtonTheme,
  mode: "main" | "sub",
} & HTMLAttributes<HTMLDivElement>

// components


const ServiceButton: React.FC<ServiceButtonProps> = ({ size, theme, mode, children, ...props }) => {
  return <S.ServiceButtonBlock 
    $size={size} $theme={theme} $mode={mode}
    { ...props }
  >
    { children }
  </S.ServiceButtonBlock>
};

export default ServiceButton