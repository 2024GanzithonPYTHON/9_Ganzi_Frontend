import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as W from "./styledWelcome";

export function Welcome() {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState("");
  const [profileImage, setProfileImage] = useState("");

  useEffect(() => {
    // localStorage에서 프로필 정보 확인
    const token = localStorage.getItem("Authorization");
    const storedNickname = localStorage.getItem("nickname");
    const storedProfileImage = localStorage.getItem("profileImage");

    if (!token) {
      console.error("No token found. Redirecting to login page...");
      alert("로그인이 필요합니다. 다시 로그인해주세요.");
      navigate("/register");
    } else {
      setNickname(storedNickname || "Unknown");
      setProfileImage(storedProfileImage || "");
      console.log("Profile info loaded from localStorage");
    }
  }, [navigate]);

  const goGender = () => {
    navigate(`/gender`);
  };

  return (
    <W.Container>
      <W.InfoText>
        반가워요, {nickname}님!
        <br />
        지금부터 생활 리듬을 만들어볼까요?
      </W.InfoText>
      <W.InfoText2>집안일 분배, 집콕콕과 함께해요!</W.InfoText2>
      <W.WelcomeLogo />
      <W.CompleteBtn onClick={goGender} />
    </W.Container>
  );
}

export default Welcome;
