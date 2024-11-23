import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as J from "./styledJoin";

export function Join() {
  const [inviteCode, setInviteCode] = useState(""); // 사용자가 입력한 초대 코드
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setInviteCode(e.target.value); // 입력된 초대 코드 저장
  };

  const submitInviteCode = async () => {
    const token = localStorage.getItem("Authorization");

    if (!token) {
      alert("로그인이 필요합니다.");
      navigate("/register");
      return;
    }

    try {
      console.log("Authorization Header:", token);
      console.log("Request Body:", inviteCode);

      const response = await fetch("/team", {
        method: "PATCH",
        headers: {
          Authorization: `${token}`,
          "Content-Type": "text/plain",
        },
        body: inviteCode.trim(), // 공백 제거 후 전송
      });

      console.log("Response Status:", response.status);

      if (!response.ok) {
        if (response.status === 404) {
          alert("초대 코드를 찾을 수 없습니다. 다시 확인해주세요.");
        } else if (response.status === 403) {
          alert("접근이 거부되었습니다. 유효한 초대 코드인지 확인하세요.");
        } else if (response.status === 400) {
          alert("요청 형식이 잘못되었습니다. 서버 문서를 확인하세요.");
        } else {
          alert("초대 코드 매칭 중 오류가 발생했습니다.");
        }
        throw new Error(`Failed to match invite code: ${response.status}`);
      }

      const result = await response.json();
      alert("초대 코드가 매칭되었습니다!");
      console.log("Matched Team Info:", result);
    } catch (error) {
      console.error("Error matching invite code:", error.message);
    }
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <J.Container>
      <J.BackBtn onClick={goBack} />
      <J.PageTitle>멤버 추가</J.PageTitle>
      <J.InfoText>초대코드를 입력해주세요.</J.InfoText>
      <J.InputBox
        placeholder="초대코드 입력"
        value={inviteCode}
        onChange={handleInputChange} // 입력 변경 시 초대 코드 상태 업데이트
      />
      <J.ConfirmBtn onClick={submitInviteCode} />
    </J.Container>
  );
}

export default Join;
