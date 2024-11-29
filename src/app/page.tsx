"use client";

import BriefBlock from "@/components/common/BriefBlock";
import Navbar from "@/components/common/Navbar";
import TagBlock from "@/components/common/TagBlock";
import TagSelector from "@/components/common/TagSelector";
import { useState } from "react";

export default function ServiceWrap() {
  const [checked, setChecked] = useState<boolean>(false);
  return (
    <section>
      <Navbar/>
      <section style={{
        display: "flex",
        flexDirection: "row"
      }}>
        <BriefBlock title="총 참여한 동아리 개수" unit="개">{12}</BriefBlock>
        <BriefBlock title="총 참여한 동아리 개수" unit="개">{12}</BriefBlock>
      </section>
      {/* <TagBlock multiSelect={true} selected={checked} onClick={() => setChecked(p => !p)}>abc</TagBlock> */}
      <section style={{
        width: "fit-content"
      }}>
      <TagSelector 
        selections={[
          { text: "분야1", value: 1 },
          { text: "분야2", value: 2 },
          { text: "분야3", value: 3 },
        ]}
        category="분야"
        multi_select={true}
      />
      </section>
    </section>
  );
}
