import { useState, useEffect, useRef } from "react";

import * as S from './style';
import * as C from '@/constants';

// global state
// import states from "@/core/zustand/states";

// assets
import {  } from "@tabler/icons-react"
import { ClubType } from "@/types/Club";

// API
// import dataAPI from "@data/index"

// constants

// types
type ClubListBlockProps = {
  name: string,
  type: ClubType,
  depart: string
}

// components


const ClubListBlock: React.FC<ClubListBlockProps> = ({ name, type, depart }) => {
  console.log(type);
  return <S.ClubListBlock>
    <S.ContentArea>
      <S.BasicInfoArea>
        <h3>{name}</h3>
        <h5>{type === ClubType.CLUB ? "동아리" : "소학회"}</h5>
      </S.BasicInfoArea>
      <S.DepartArea>
        {depart}
      </S.DepartArea>
    </S.ContentArea>
    <S.ArrowIcon/>
  </S.ClubListBlock>
};

export default ClubListBlock