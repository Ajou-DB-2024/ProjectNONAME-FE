"use client";

import GroupingTitle, { GROUPING_TITLE_TYPE } from "@/components/common/GroupingTitle";
import Navbar from "@/components/common/Navbar";
import ProfileSelector from "@/components/common/ProfileSelector";
import SearchBlock from "@/components/common/SearchBlock";
import states from "@/core/zustand/states";

export default function ServiceWrap() {

  const { alert } = states.useGlobalAlertQueue();

  return (
    <section>
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
