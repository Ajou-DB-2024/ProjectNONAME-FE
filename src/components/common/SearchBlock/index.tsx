import { IconSearch } from "@tabler/icons-react";
import * as S from "./style";
import useKeyword from "./hooks/useKeyword";
import useSearchEvents from "./hooks/useSearchEvents";
import { HTMLAttributes } from "react";

type SearchBlockProps = {
  placeholder: string;
  onKeywordInput?: (keyword: string) => void;
} & HTMLAttributes<HTMLTableSectionElement>;

const SearchBlock: React.FC<SearchBlockProps> = ({ placeholder, onKeywordInput, ...props }) => {
  const { keyword, setKeyword } = useKeyword();
  const { isFocused, handleInputChange, handleFocus, handleBlur } = useSearchEvents(
    keyword,
    setKeyword,
    onKeywordInput
  );

  return (
    <S.Container { ...props }>
      <S.SearchInputWrapper $focused={isFocused}>
        <IconSearch size={20} color={isFocused ? "var(--service-color-H)" : "#9ca3af"} />
        <S.SearchInput
          placeholder={placeholder}
          value={keyword}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </S.SearchInputWrapper>
    </S.Container>
  );
};

export default SearchBlock;
