import { useState, useEffect, useRef, useMemo } from "react";

import * as S from "./style";
import * as C from '@/constants';

// recoil
import states from "@/core/zustand/states";

// assets
import { IconChevronDown } from "@tabler/icons-react"
import { Club } from "./type";
import { GlobalAlertInfo } from "../GlobalAlert/type";
import { ServiceButtonTheme } from "../ServiceButton/type";

// API
// import dataAPI from "@data/index"

// constants

// types
type ProfileSelectorProps = {
  onSelect: ( value: Club ) => any
  clubs: Club[],
}

// components


const ProfileSelector: React.FC<ProfileSelectorProps> = ({ onSelect, clubs }) => {

  const { alert } = states.useGlobalAlertQueue();
  const [status, setStatus] = useState<"selected" | "selecting">("selected");
  const [selected_profile, setSelectedProfile] = useState<Club>(clubs[0]);
  const profiles = useMemo(() => 
    clubs.map(club => 
      ({text: club.club_name, value: club.club_id})
    )
  , [ clubs ]);

  useEffect(() => {
    onSelect(selected_profile);
  }, [selected_profile]);

  const showError = (title: string, desc: string) => {
    alert({
      type: "GLOBAL_ALERT_TYPE/ALERT",
      contents: {
        title, desc,
        buttons: [ { 
          text: "확인", value: "",  
          theme: ServiceButtonTheme.COLORED, mode: "main" ,
          onClick: () => true
        } ]
      }
    });
  }

  const onSelectorClick = () => {
    setStatus("selecting");
    alert({
      type: "GLOBAL_ALERT_TYPE/SELECT",
      contents: {
        title: "프로필 선택",
        desc: "홈에서 확인할 프로필을 선택해주세요",
        selections: profiles,
        onSelect: (club_id: string) => {
          const club = clubs.find(v => v.club_id == club_id);
          if (!club) {
            showError("프로필을 변경하던 중 오류가 발생하였습니다","잠시 후 다시 시도해주세요");
            return true;
          }

          console.log(`동아리 프로필 선택됨: ${club.club_name}`);
          setSelectedProfile(club);
          return true;
        },
        onClose: () => {
          setStatus("selected");
        }
      }
    });
  }

  return <S.ProfileSelectorArea onClick={onSelectorClick}>
    <S.SelectedProfileName>{selected_profile.club_name}</S.SelectedProfileName>
    <S.ArrowIcon status={status}/>
  </S.ProfileSelectorArea>
};

export default ProfileSelector