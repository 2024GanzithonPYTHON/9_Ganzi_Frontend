import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as J from "./styledJoin";

export function Join() {
  const navigate = useNavigate();

  const goInvite = () => {
    navigate(`/invite`);
  };

  const goJoin = () => {
    navigate(`/join`);
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <J.Container>
        <J.BackBtn onClick={goBack} />
        <J.PageTitle>멤버 추가</J.PageTitle>
        <J.InfoText>초대코드를 입력해주세요.</J.InfoText>{" "}
        <J.InputBox placeholder="초대코드 입력" />
        <J.ConfirmBtn />
      </J.Container>
    </>
  );
}

export default Join;
