import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";

import StyledComponentsRegistry from '@/lib/registry'

import "./globals.css";
import MobileWrap from "@/templates/MobileWrap";
import CommonWrapper from "@/templates/CommonWrapper";
import { MemberAPI } from "@/api";

export const metadata: Metadata = {
  title: "Weave",
  description: "Weave; 당신의 동아리, 우리의 이야기",
};

const notoSansKR = Noto_Sans_KR({ 
  weight: [ '300', '400', '500', '600', '700' ],
  subsets: ['latin']
})

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  let member;

  try {
    const member_response = await MemberAPI.getLoginedMember();
    if (!member_response.result) 
      throw new Error("데이터 조회에 실패했어요. 잠시 후 다시 시도해주세요.");
    if (!member_response.data.success) 
      throw new Error("데이터 조회에 실패했어요. 잠시 후 다시 시도해주세요.");
  
    member = member_response.data.data;
    console.log(`로그인 확인됨: ${member.name} | ${member.university.department}`)

  } catch (e) {}
  
  return (
    <html lang="ko" className={notoSansKR.className}>
      <body className={``}>
        <StyledComponentsRegistry>
          <MobileWrap>
            <CommonWrapper member={member}>
              {children}
            </CommonWrapper>
          </MobileWrap>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
