import { useState } from "react";

const useSearchEvents = (
  keyword: string,
  setKeyword: (value: string) => void,
  onKeywordInput?: (keyword: string) => void
) => {
  const [isInputed, setIsInputed] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setKeyword(value); // 입력 값을 키워드에 반영
    setIsInputed(value.trim().length > 0); // 입력된 값 유무를 상태로 저장
  };

  const handleFocus = () => {
    setIsFocused(true); // focus 상태로 전환
  };

  const handleBlur = () => {
    setIsFocused(false); // focus 상태 해제
    if (keyword.trim() && onKeywordInput) {
      onKeywordInput(keyword.trim());
    }
  };

  return { isInputed, isFocused, handleInputChange, handleFocus, handleBlur };
};

export default useSearchEvents;
