import { useState, useEffect, useRef } from "react";
import Image from "next/image";

import * as S from './style';

const ServiceLogoSection: React.FC = () => {
  return <S.ServiceLogoSection>
    <S.ServiceLogoArea>
      <Image 
        src="/assets/image/logo/horizontal-full-1x.svg"
        width={186} 
        height={52} 
        alt={'Service Logo'}
      />
    </S.ServiceLogoArea>
    <S.ServiceCatchPhraseArea>
      <section>
        <span>당신의</span>
        <span className='colorA'>동아리</span>
      </section>
      <section>
        <span>우리의</span>
        <span className='colorB'>이야기</span>
      </section>
    </S.ServiceCatchPhraseArea>
  </S.ServiceLogoSection>
};

export default ServiceLogoSection