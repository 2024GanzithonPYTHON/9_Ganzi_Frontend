import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as A from "./styledAddMember";

export function AddMember() {
  const navigate = useNavigate();

  const goGender = () => {
    navigate(`/gender`);
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <A.Container>
        <A.BanckBtn onClick={goBack} />
        <A.PageTitle>멤버 추가</A.PageTitle>
        <A.InfoText>
          홍길동님,
          <br />
          함께 집안일을 할 멤버를 초대하거나
          <br />
          초대코드를 받아 참여해보세요.
        </A.InfoText>
        <A.InviteBtn onClick={goGender} />
        <A.JoinBtn />
      </A.Container>
    </>
  );
}

export default AddMember;
