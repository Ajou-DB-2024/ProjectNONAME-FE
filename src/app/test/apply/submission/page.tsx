"use server";

import ApplicationTemplate from "@/templates/ApplicationTemplate";

export default async function ApplicationEditPage() {
  const mockQuestions = [
    {
      question_id: 1,
      num: 1,
      title: "지원동기를 적어주세요",
      type: "text",
      is_required: 1,
    },
    {
      question_id: 2,
      num: 2,
      title: "동아리에 들어와 하고싶은게 있다면?",
      type: "text",
      is_required: 1,
    },
    {
      question_id: 3,
      num: 3,
      title: "지금 가장 먹고싶은 것이 있다면?",
      type: "text",
      is_required: 1,
    },
    {
      question_id: 4,
      num: 4,
      title: "나에게 DBClub이란?",
      type: "text",
      is_required: 1,
    },
  ];
  const mockAnswers = ["", ""]; // 질문 순서에 따른 초기 답변 데이터

  return (
    <ApplicationTemplate
      mode="edit"
      questions={mockQuestions}
    />
  );
}
