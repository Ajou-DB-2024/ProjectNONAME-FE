import { useState, useEffect, useMemo, useCallback } from "react";

import { ClubAPI } from "@/api";
import { Club, ClubSearchQuery, ClubType, ExtendedClub, ExtendedDBClub } from "@/types/Club";


type Status = {
  is_loaded: boolean;
  is_error: boolean;
  message?: string;
};

const useClubList = (raw_query: Partial<ClubSearchQuery>) => {
  const [status, setStatus] = useState<Status>({
    is_loaded: false,
    is_error: false,
  });
  const [clubList, setClubList] = useState<ExtendedClub[]>([]);

  const query = useMemo(() => raw_query, [raw_query]);

  const fetchClubList = useCallback(async () => {
    setStatus({ is_loaded: false, is_error: false });

    try {
      const response = await ClubAPI.findClub(query); // API 호출
      if (!response.result) throw new Error("Failed to fetch recruits");
      if (!response.data.success) throw new Error("Failed to fetch recruits");

      const { data: raw_list } = response.data;
      const club_list = raw_list.map(v => ({
        ...v,
        club_id: v.id.toString(),
        club_name: v.name,
        type: v.type as ClubType
      }));
      setClubList(club_list); // 데이터 저장
      setStatus({ is_loaded: true, is_error: false });
    } catch (error: any) {
      setStatus({
        is_loaded: true,
        is_error: true,
        message: error.message || "Error occurred",
      });
    }
  }, [query]);

  useEffect(() => {
    console.log("sejfio");
    fetchClubList();
  }, [query]);

  return [status, clubList] as [Status, ExtendedClub[]];
};

export default useClubList;
