import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as A from "./styledAddMember";

export function AddMember() {
  const [nickname, setNickname] = useState(""); // 닉네임 상태
  const navigate = useNavigate();

  useEffect(() => {
    const storedNickname = localStorage.getItem("nickname"); // localStorage에서 닉네임 가져오기

    if (storedNickname) {
      setNickname(storedNickname); // 닉네임 상태에 저장
    } else {
      console.error("닉네임 정보가 없습니다.");
      alert("로그인이 필요합니다. 다시 로그인해주세요.");
      navigate("/register"); // 로그인 페이지로 이동
    }
  }, [navigate]);

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
    <A.Container>
      <A.BanckBtn onClick={goBack} />
      <A.PageTitle>멤버 추가</A.PageTitle>
      <A.InfoText>
        {nickname}님,
        <br />
        함께 집안일을 할 멤버를 초대하거나
        <br />
        초대코드를 받아 참여해보세요.
      </A.InfoText>
      <A.InviteBtn onClick={goInvite} />
      <A.JoinBtn onClick={goJoin} />
    </A.Container>
  );
}

export default AddMember;
