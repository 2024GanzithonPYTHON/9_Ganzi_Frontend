import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as I from "./styledInvite";

export function Invite() {
  const [inviteCode, setInviteCode] = useState(""); // 초대 코드 상태
  const navigate = useNavigate();

  const fetchInviteCode = async () => {
    const token = localStorage.getItem("Authorization"); // 토큰 가져오기

    if (!token) {
      alert("로그인이 필요합니다.");
      navigate("/register"); // 로그인 페이지로 이동
      return;
    }

    try {
      console.log("Authorization Token:", token); // 토큰 로그 확인

      const response = await fetch("/team/uuid", {
        method: "POST",
        headers: {
          Authorization: `${token}`, // 토큰 전달 확인
          "Content-Type": "application/json",
        },
      });

      console.log("Response status:", response.status); // 상태 코드 확인

      if (!response.ok) {
        const errorText = await response.text(); // 서버 응답 내용 확인
        console.error(`Error details: ${errorText}`); // 상세 에러 로그
        throw new Error(`Failed to fetch invite code: ${response.status}`);
      }

      const inviteCode = await response.text(); // 초대 코드는 텍스트 형식으로 반환됨
      setInviteCode(inviteCode); // 상태에 초대 코드 저장
      console.log("Invite Code fetched successfully:", inviteCode);
    } catch (error) {
      console.error("Error fetching invite code:", error.message);
      alert("초대 코드를 가져오는 데 실패했습니다. 다시 시도해주세요.");
    }
  };

  useEffect(() => {
    fetchInviteCode(); // 컴포넌트가 렌더링될 때 초대 코드 가져오기
  }, []);

  const goBack = () => {
    navigate(-1);
  };

  return (
    <I.Container>
      <I.BackBtn onClick={goBack} />
      <I.PageTitle>멤버 추가</I.PageTitle>
      <I.InfoText>함께 집안일을 할 멤버를 초대해주세요!</I.InfoText>
      <I.InfoText2>집콕콕 초대코드</I.InfoText2>
      <I.CodeBox>{inviteCode}</I.CodeBox>
      {/* 초대 코드 표시 */}
      <I.CopyBtn
        onClick={() => {
          if (inviteCode) {
            navigator.clipboard.writeText(inviteCode); // 초대 코드 클립보드 복사
            alert("초대 코드가 클립보드에 복사되었습니다!");
          } else {
            alert("초대 코드가 없습니다. 다시 시도해주세요.");
          }
        }}
      />
    </I.Container>
  );
}

export default Invite;
