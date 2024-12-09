import React from "react";
import * as S from "./style";
import { IconEyeClosed, IconMoodCheck, IconSearch, IconSquareCheck } from "@tabler/icons-react";

const FilterBar: React.FC = () => {
  return (
    <S.Container>
      <S.FilterButton><IconSquareCheck/></S.FilterButton>
      <S.Divider />
      <S.FilterButton><IconEyeClosed/></S.FilterButton>
      <S.FilterButton><IconMoodCheck/></S.FilterButton>
      <S.SearchButton><IconSearch/></S.SearchButton>
    </S.Container>
  );
};

export default FilterBar;
