"use client";

import BriefBlock from "@/components/common/BriefBlock";
import Navbar from "@/components/common/Navbar";
import TagBlock from "@/components/common/TagBlock";
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
      <TagBlock multiSelect={true} selected={checked} onClick={() => setChecked(p => !p)}>abc</TagBlock>
    </section>
  );
}
