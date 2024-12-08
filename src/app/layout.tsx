import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";

import StyledComponentsRegistry from '@/lib/registry'

import "./globals.css";
import MobileWrap from "@/templates/MobileWrap";
import CommonWrapper from "@/templates/CommonWrapper";

export const metadata: Metadata = {
  title: "Weave",
  description: "Weave; 당신의 동아리, 우리의 이야기",
};

const notoSansKR = Noto_Sans_KR({ 
  weight: [ '300', '400', '500', '600', '700' ],
  subsets: ['latin']
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={notoSansKR.className}>
      <body className={``}>
        <StyledComponentsRegistry>
          <MobileWrap>
            <CommonWrapper>
              {children}
            </CommonWrapper>
          </MobileWrap>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
