"use client";

import * as S from './style';
import * as C from '@/constants';

// global state
// import states from "@/core/zustand/states";

// assets
import {  } from "@tabler/icons-react"
import Image from 'next/image';

// API
// import dataAPI from "@data/index"

// constants

// types
type LoginTemplateProps = {
  
}

// components


const LoginTemplate: React.FC<LoginTemplateProps> = () => {
  return <S.LoginTemplate>
    <S.Section>
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
    </S.Section>
    <S.Section>
      <S.ServiceGuideMentArea>
        <section>
          <span>Weave는</span>
          <span className='colorA'>Google 로그인으로</span>
        </section>
        <section>
          <span>회원가입 없이</span>
          <span className='colorA'>바로 사용할 수 있어요!</span>
        </section>
      </S.ServiceGuideMentArea>
      <S.LoginButton onClick={() => (location.href = "/api/login")}>
        <Image 
          src="/assets/image/google.svg"
          width={30} 
          height={30} 
          alt={'Google Logo'}
        />
        <span>Google로 로그인</span>
      </S.LoginButton>
    </S.Section>
  </S.LoginTemplate>
};

export default LoginTemplate