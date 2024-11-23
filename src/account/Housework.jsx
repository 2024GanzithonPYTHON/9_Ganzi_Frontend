import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as H from "./styledHousework";

export function Housework() {
  const [childCount, setChildCount] = useState(0); // 자녀 수 상태
  const [petCount, setPetCount] = useState(0); // 반려동물 수 상태
  const [nickname, setNickname] = useState(""); // 닉네임 상태
  const [profileImage, setProfileImage] = useState(""); // 프로필 이미지 상태
  const navigate = useNavigate();

  const times = ["1시간", "1시간 30분", "2시간", "2시간 30분", "사용자 설정"]; // 선택 가능한 시간
  const [selectedTime, setSelectedTime] = useState(null); // 선택된 시간을 관리
  const [customTime, setCustomTime] = useState(""); // 사용자 입력 시간 관리

  // 프로필 정보 가져오기
  useEffect(() => {
    const storedNickname = localStorage.getItem("nickname");
    const storedProfileImage = localStorage.getItem("profileImage");

    if (storedNickname && storedProfileImage) {
      setNickname(storedNickname);
      setProfileImage(storedProfileImage);
    } else {
      console.error("Profile information is missing");
      alert("프로필 정보가 누락되었습니다. 다시 로그인해주세요.");
      navigate("/"); // 로그인 페이지로 이동
    }
  }, [navigate]);

  // 가사 참여 시간을 전송하는 함수
  const sendParticipationTime = async () => {
    const token = localStorage.getItem("Authorization"); // 토큰 가져오기

    if (!token) {
      alert("로그인이 필요합니다.");
      navigate("/register");
      return;
    }

    // 사용자가 선택한 시간 또는 입력한 사용자 설정 시간
    const participationTime =
      selectedTime === "사용자 설정" ? customTime : selectedTime;

    if (!participationTime || participationTime.trim() === "") {
      alert("가사 참여 시간을 선택하거나 입력해주세요.");
      return;
    }

    try {
      const response = await fetch("/user/additionalInfo", {
        method: "PATCH",
        headers: {
          Authorization: `${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          participationTime, // 스트링형으로 전송
        }),
      });

      if (!response.ok) {
        throw new Error(
          `Failed to send participation time: ${response.status}`
        );
      }

      console.log("Participation time successfully sent to backend.");
      navigate(`/housework2`); // 성공적으로 저장되면 다음 페이지로 이동
    } catch (error) {
      console.error("Error sending participation time:", error.message);
      alert("가사 참여 시간 저장에 실패했습니다. 다시 시도해주세요.");
    }
  };

  const goHousework2 = () => {
    sendParticipationTime();
  };

  const handleTimeClick = (time) => {
    setSelectedTime(time); // 선택된 시간 업데이트
    if (time !== "사용자 설정") {
      setCustomTime(""); // 사용자 입력 시간 초기화
    }
  };

  const handleCustomTimeChange = (e) => {
    setCustomTime(e.target.value); // 사용자 입력 값 업데이트
  };

  return (
    <H.Container>
      <H.ProfileImg>
        <img src={profileImage} alt={`${nickname}'s profile`} />
      </H.ProfileImg>
      <H.Nickname>{nickname}</H.Nickname>
      <H.InfoText>
        <H.HighlightText>하루</H.HighlightText>
        <span>에 얼마나 가사에 참여할 수 있나요?</span>
      </H.InfoText>

      {/* 시간 선택 버튼 */}
      <H.TimeButtonContainer>
        {times.map((time) => (
          <H.TimeButton
            key={time}
            isSelected={selectedTime === time}
            onClick={() => handleTimeClick(time)}
          >
            {time === "사용자 설정" && selectedTime === "사용자 설정" ? (
              <H.CustomTimeInput
                type="text"
                value={customTime}
                placeholder="예: 3시간"
                onChange={handleCustomTimeChange}
              />
            ) : (
              time
            )}
          </H.TimeButton>
        ))}
      </H.TimeButtonContainer>

      {/* 다음 버튼 */}
      <H.NextBtn onClick={goHousework2} />
    </H.Container>
  );
}

export default Housework;
