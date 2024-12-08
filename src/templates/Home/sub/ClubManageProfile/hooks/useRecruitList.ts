import { useState, useEffect, useMemo } from "react";
import * as C from "@/constants"; // 이미 정의된 상수 사용
import { findRecruit } from "@/api/Apply";
import { Recruit, RecruitSearchQuery } from "@/types/Recruit";

type Status = {
  is_loaded: boolean;
  is_error: boolean;
  message?: string;
};

const useRecruitList = (raw_query: Partial<RecruitSearchQuery>) => {
  const [status, setStatus] = useState<Status>({
    is_loaded: false,
    is_error: false,
  });
  const [recruitList, setRecruitList] = useState<Recruit[]>([]);

  const query = useMemo(() => raw_query, [ raw_query ]);

  useEffect(() => {
    const fetchRecruits = async () => {
      setStatus({ is_loaded: false, is_error: false });

      try {
        const response = await findRecruit(query); // findRecruit 호출
        if (!response.result) throw new Error("Failed to fetch recruits");
        if (!response.data.success) throw new Error("Failed to fetch recruits");
        
        setRecruitList(response.data.data); // 데이터 저장
        return setStatus({ is_loaded: true, is_error: false });

      } catch (error: any) {
        setStatus({
          is_loaded: true,
          is_error: true,
          message: error.message || "Error occurred",
        });
      }
    };

    fetchRecruits();
    
  }, [query]);

  return [status, recruitList] as [
    Status,
    Recruit[]
  ];
};

export default useRecruitList;
