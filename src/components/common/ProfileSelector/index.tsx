import { useState, useEffect, useRef, useMemo } from "react";

import * as S from "./style";
import * as C from '@/constants';

// recoil
import { useRecoilState, useSetRecoilState, useRecoilValue, ResetRecoilState } from "recoil";
// import states from "@/core/recoil/states";

// assets
import { IconChevronDown } from "@tabler/icons-react"
import { Club } from "./type";

// API
// import dataAPI from "@data/index"

// constants

// types
type ProfileSelectorProps = {
  onSelect: ( value: string ) => any
  clubs: Club[],
}

// components


const ProfileSelector: React.FC<ProfileSelectorProps> = ({ onSelect, clubs }) => {

  const [status, setStatus] = useState<"selected" | "selecting">("selected");
  const [selected_profile, setSelectedProfile] = useState<Club>(clubs[0]);
  const profiles = useMemo(() => 
    clubs.map(club => 
      ({text: club.club_name, value: club.club_id})
    )
  , [ clubs ]);

  const onSelectorClick = () => {
    setStatus(p => p === "selected" ? "selecting" : "selected");
  }

  return <S.ProfileSelectorArea onClick={onSelectorClick}>
    <S.SelectedProfileName>{selected_profile.club_name}</S.SelectedProfileName>
    <S.ArrowIcon status={status}/>
  </S.ProfileSelectorArea>
};

export default ProfileSelector