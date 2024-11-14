import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as N from "./styledNickname";

export function Nickname() {
  const navigate = useNavigate();

  const goGender = () => {
    navigate(`/gender`);
  };

  return (
    <>
      <N.Container>
        <N.DefaultProfile />
        <N.InfoText>별명으로 사용할 이름을 입력하세요.</N.InfoText>
        <N.InputBox placeholder="별명 입력" />
        <N.CompleteBtn onClick={goGender} />
      </N.Container>
    </>
  );
}

export default Nickname;
