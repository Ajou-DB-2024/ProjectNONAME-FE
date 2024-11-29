"use client";

import BriefBlock from "@/components/common/BriefBlock";
import Navbar from "@/components/common/Navbar";
import RecruitFilter from "@/components/common/RecruitFilter";
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
        width: "100%",
      }}>
      <RecruitFilter filters={[
        { category: {
            id: "test1",
            text: "테스트1"
          }, selections: [
            { text: "aaaa", value: "aaaa1" },
            { text: "bbbb", value: "bbbb1" },
            { text: "cccc", value: "cccc1" },
            { text: "dddd", value: "dddd1" },
          ] 
        },
        { category: {
            id: "test2",
            text: "테스트2"
          }, selections: [
            { text: "aaaa", value: "aaaa2" },
            { text: "bbbb", value: "bbbb2" },
            { text: "cccc", value: "cccc2" },
            { text: "dddd", value: "dddd2" },
          ] 
        },
        { category: {
            id: "test3",
            text: "테스트3"
          }, selections: [
            { text: "aaaa", value: "aaaa3" },
            { text: "bbbb", value: "bbbb3" },
            { text: "cccc", value: "cccc3" },
            { text: "dddd", value: "dddd3" },
          ] 
        },
        { category: {
            id: "test4",
            text: "테스트4"
          }, selections: [
            { text: "aaaa", value: "aaaa4" },
            { text: "bbbb", value: "bbbb4" },
            { text: "cccc", value: "cccc4" },
            { text: "dddd", value: "dddd4" },
          ] 
        },
        { category: {
            id: "test5",
            text: "테스트5"
          }, selections: [
            { text: "aaaa", value: "aaaa5" },
            { text: "bbbb", value: "bbbb5" },
            { text: "cccc", value: "cccc5" },
            { text: "dddd", value: "dddd5" },
          ] 
        }
      ]}/>
      </section>
    </section>
  );
}
