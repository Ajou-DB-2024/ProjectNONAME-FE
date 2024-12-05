"use client";

import BriefBlock from "@/components/common/BriefBlock";
import GroupingTitle, { GROUPING_TITLE_TYPE } from "@/components/common/GroupingTitle";
import Navbar from "@/components/common/Navbar";
import RecruitFilter from "@/components/common/RecruitFilter";
import SearchBlock from "@/components/common/SearchBlock";
import TagBlock from "@/components/common/TagBlock";
import TagSelector from "@/components/common/TagSelector";
import { useState } from "react";

export default function ServiceWrap() {
  const [checked, setChecked] = useState<boolean>(false);
  return (
    <section>
      <Navbar/>
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
