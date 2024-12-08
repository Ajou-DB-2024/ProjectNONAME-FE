import { useState, useCallback } from "react";
import { getRecruitBrief } from "@/api/Apply"; // API 호출 함수
import { RecruitBrief } from "@/types/Recruit"; // 타입 정의

type RecruitBriefStatus = {
  is_loaded: boolean;
  is_error: boolean;
  message?: string;
};

const useRecruitBrief = (): [
  RecruitBrief | null, // 현재 recruit_brief 상태
  (recruit_id: number) => void // 업데이트 함수
] => {
  const [status, setStatus] = useState<RecruitBriefStatus>({
    is_loaded: false,
    is_error: false,
  });
  const [recruitBrief, setRecruitBrief] = useState<RecruitBrief | null>(null);

  const updateRecruitBrief = useCallback((recruit_id: number) => {
    const fetchRecruitBrief = async () => {
      setStatus({ is_loaded: false, is_error: false });

      try {
        const response = await getRecruitBrief(recruit_id); // API 호출
        if (!response.result) throw new Error("Failed to fetch recruit brief");
        if (!response.data.success) throw new Error("Failed to fetch recruit brief");

        setRecruitBrief(response.data.data); // 데이터 저장
        setStatus({ is_loaded: true, is_error: false });
      } catch (error: any) {
        setStatus({
          is_loaded: true,
          is_error: true,
          message: error.message || "Error occurred",
        });
      }
    };

    fetchRecruitBrief();
  }, []);

  return [recruitBrief, updateRecruitBrief];
};

export default useRecruitBrief;
