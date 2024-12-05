import { useState } from "react";

const useKeyword = () => {
  const [keyword, setKeyword] = useState("");

  // 입력 값 검증 (특정 특수문자, 한글, 영어, 숫자만 허용)
  const validateInput = (value: string): string => {
    const regex = /^[ㄱ-ㅎ가-힣a-zA-Z0-9\s\-_*.]*$/;
    return regex.test(value) ? value : keyword; // 불허 문자 입력 시 기존 값 유지
  };

  const updateKeyword = (value: string) => {
    const validValue = validateInput(value);
    setKeyword(validValue);
    return validValue;
  };

  return { keyword, setKeyword: updateKeyword };
};

export default useKeyword;
