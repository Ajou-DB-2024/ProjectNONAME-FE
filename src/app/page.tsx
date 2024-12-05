"use client";

import BriefBlock from "@/components/common/BriefBlock";
import GlobalAlert from "@/components/common/GlobalAlert";
import { GlobalAlertInfo } from "@/components/common/GlobalAlert/type";
import GroupingTitle, { GROUPING_TITLE_TYPE } from "@/components/common/GroupingTitle";
import Navbar from "@/components/common/Navbar";
import ProfileSelector from "@/components/common/ProfileSelector";
import RecruitFilter from "@/components/common/RecruitFilter";
import SearchBlock from "@/components/common/SearchBlock";
import TagBlock from "@/components/common/TagBlock";
import TagSelector from "@/components/common/TagSelector";
import states from "@/core/zustand/states";
import { useEffect, useState } from "react";

export default function ServiceWrap() {

  const { alert } = states.useGlobalAlertQueue();
  useEffect(() => {
    const alert_info = {
      type: "GLOBAL_ALERT_TYPE/PROMPT",
      contents: {
        title: "프롬프트",
        desc: "프롬프트이지롱",
        buttons: [
          { text: "입력완료", theme: "SERVICE_BUTTON/THEME/COLORED", mode: "main",
            onClick: (...props) => { console.log(...props) } 
          }
        ]
      }
    } as GlobalAlertInfo;
    setTimeout(() => {
      console.log(alert_info);
      alert(alert_info);
    }, 500);
  }, []);

  return (
    <section>
      <GlobalAlert/>
      <Navbar/>
      <ProfileSelector
       onSelect={(...props) => console.log(props)}
       clubs={[
        { club_id: "TEST_001", club_name: "나데베의 Weave" },
        { club_id: "TEST_002", club_name: "Whois" }
       ]}
      />

      {/* <TagBlock multiSelect={true} selected={checked} onClick={() => setChecked(p => !p)}>abc</TagBlock> */}
      <section style={{
        width: "100%",
      }}>
      <SearchBlock placeholder={"동아리, 소학회의 정보 등을 검색해보세요"} />
      <GroupingTitle 
        type={GROUPING_TITLE_TYPE.KIND} 
        desc={"추천 동아리"} title={"이런 동아리는 어때요?"}
      />
      </section>
    </section>
  );
}
