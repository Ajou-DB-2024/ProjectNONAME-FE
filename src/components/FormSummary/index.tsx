import React from "react";
import * as S from "./style";
import BriefBlock from "../common/BriefBlock";

const FormSummary: React.FC = () => (
  <S.Container>
    <BriefBlock title={"필수문항 개수"} children={"3"} unit={"개"} style={{ width: "100%" }}/>
    <BriefBlock title={"선택문항 개수"} children={"2"} unit={"개"} style={{ width: "100%" }}/>
  </S.Container>
);

export default FormSummary;
