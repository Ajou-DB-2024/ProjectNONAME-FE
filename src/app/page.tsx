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
      type: "GLOBAL_ALERT_TYPE/SELECT",
      contents: {
        title: "프로필 선택",
        desc: "홈에서 확인할 프로필을 선택해주세요",
        selections: [
          { text: "aaaaaa", value: "111111" },
          { text: "bbbbbb", value: "222222" },
          { text: "cccccc", value: "333333" },
          { text: "dddddd", value: "444444" },
          { text: "eeeeee", value: "555555" }
        ],
        onSelect: (...props) => {
          console.log(props)
          return true;
        },
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
