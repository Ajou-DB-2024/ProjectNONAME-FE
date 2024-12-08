"use server";

import PersonalGlobalLayout from "@/templates/Personal/GlobalLayout";
import { ReactNode } from "react";

export default async function PersonalPagesLayout({children}: {children?: ReactNode}) {

  return <PersonalGlobalLayout>{
    children
  }</PersonalGlobalLayout>;
}