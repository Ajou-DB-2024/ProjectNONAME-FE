"use client";

import { useState, useEffect, useRef, HTMLAttributes } from "react";
import Image from "next/image";

import * as S from './style';
import * as C from '@/constants';

// recoil
import { useRecoilState, useSetRecoilState, useRecoilValue, ResetRecoilState } from "recoil";
// import states from "@/core/recoil/states";

// assets
import { IconBell, IconLogout, IconUser } from "@tabler/icons-react"

// API
// import dataAPI from "@data/index"

// constants
const NavControlItemTypes = {
  "NOTIFICATION": "NAV_CONTROL_ITEM_TYPES/NOTIFICATION",
  "MYPAGE": "NAV_CONTROL_ITEM_TYPES/MYPAGE",
  "LOGOUT": "NAV_CONTROL_ITEM_TYPES/LOGOUT",
  "NONE": "NAV_CONTROL_ITEM_TYPES/NONE"
} as const;
type NavControlItemTypes = typeof NavControlItemTypes[ keyof typeof NavControlItemTypes ]

// types

type NavbarControlItemProps = {
  Comp: (props: {[keys in string]: any}) => React.ReactNode,
  selected?: boolean
} & HTMLAttributes<HTMLTableSectionElement>

type NavbarProps = {}


// components

const NavControlItem: React.FC<NavbarControlItemProps> = ({ Comp, selected = false, ...props }) => {
  return <S.NavControlItem selected={selected} { ...props }>
    <Comp size={24} stroke={1.5} color={
      selected ? 
        "var(--service-color-H)"
        : "black"
    }/>
  </S.NavControlItem>
}

const Navbar: React.FC<NavbarProps> = ({ }) => {

  const [ isSelected, setIsSelected ] = useState<NavControlItemTypes>(NavControlItemTypes.NONE);

  const onControlItemClick = (type: NavControlItemTypes) => {
    if ( isSelected === type ) return setIsSelected(NavControlItemTypes.NONE);
    return setIsSelected(type);
  }

  return <S.Navbar selected={isSelected !== NavControlItemTypes.NONE}>
    <S.LogoImage src={C.LOGO_SYMBOL} alt="" width={42} height={42} />
    <S.NavControlArea>
      <NavControlItem Comp={IconBell} 
        selected={isSelected === NavControlItemTypes.NOTIFICATION}
        onClick={() => onControlItemClick(NavControlItemTypes.NOTIFICATION)}
      />
      <NavControlItem Comp={IconUser} 
        selected={isSelected === NavControlItemTypes.MYPAGE}
        onClick={() => onControlItemClick(NavControlItemTypes.MYPAGE)}
      />
      <NavControlItem Comp={IconLogout} 
        style={{width: "2.25rem", justifyContent: "flex-end"}}
        onClick={() => onControlItemClick(NavControlItemTypes.LOGOUT)}
      />
    </S.NavControlArea>
  </S.Navbar>
};

export default Navbar