import React from "react";
import * as S from "./style";
import ApplicantBlock from "../ApplicantBlock";
import FilterBar from "../FilterBar";

const ApplicantList: React.FC<{
  applicants: Array<{ name: string; grade: string; department: string; resumeLink: string }>;
}> = ({ applicants }) => {
  return (
    <S.Container>
      <FilterBar/>
      <S.List>
        {applicants.map((applicant, i) => (
          <ApplicantBlock 
            key={i}
            name={applicant.name} grade={applicant.grade} 
            department={applicant.department} 
            onClick={() => console.log("sejfioes")}
          />
        ))}
      </S.List>
    </S.Container>
  );
};

export default ApplicantList;
