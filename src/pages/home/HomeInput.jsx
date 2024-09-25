import React from 'react';
import S from './style';

const HomeInput = () => {

  // 15분
  // styledInput 만들어서 컴포넌트로 변경하기
  // width 200px, height 200px, border none,
  // styledButton 만들어서 컴포넌트로 변경하기
  // props로 backgroundcolor 받아서 적용시키기

  return (
    <div>
      <S.Input type="text" placeholder='이름을 입력하세요'/>
      <S.Input type="text" placeholder='비밀번호를 입력하세요' />
      <S.StyleInputButton backgroundColor={"green"}>검증 버튼😎</S.StyleInputButton>
    </div>
  );
};

export default HomeInput;