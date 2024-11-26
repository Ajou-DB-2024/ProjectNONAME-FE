"use client";

import BriefBlock from "@/components/common/BriefBlock";
import Navbar from "@/components/common/Navbar";

export default function ServiceWrap() {
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
    </section>
  );
}
