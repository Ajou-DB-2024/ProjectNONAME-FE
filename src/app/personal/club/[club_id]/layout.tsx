import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Weave - 동아리 상세",
  description: "Weave; 당신의 동아리, 우리의 이야기",
};

export default async function PersonalClubSpecLayout({children}: {children: ReactNode}) {
  return <>{children}</>;
}