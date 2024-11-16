import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as I from "./styledInvite";

export function Invite() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <I.Container>
        <I.BackBtn onClick={goBack} />
        <I.PageTitle>멤버 추가</I.PageTitle>
        <I.InfoText>함께 집안일을 할 멤버를 초대해주세요!</I.InfoText>
        <I.InfoText2>집콕콕 초대코드</I.InfoText2>
        <I.CodeBox>asdfghjkl</I.CodeBox>
        <I.CopyBtn />
      </I.Container>
    </>
  );
}

export default Invite;
