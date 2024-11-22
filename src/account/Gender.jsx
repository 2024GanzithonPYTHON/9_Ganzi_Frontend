import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as G from "./styledGender";

export function Gender() {
  const navigate = useNavigate();

  const [nickname, setNickname] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedAge, setSelectedAge] = useState(null); // 선택된 연령대 상태

  // 프로필 정보 가져오기
  const fetchProfileInfo = async () => {
    const token = localStorage.getItem("Authorization"); // 토큰 가져오기

    if (!token) {
      console.error("No token found. Redirecting to login page...");
      alert("로그인이 필요합니다. 다시 로그인해주세요.");
      navigate("/"); // 로그인 페이지로 이동
      return;
    }

    try {
      const response = await fetch(
        "https://ganzithon.hyunwoo9930.store/user/additionalInfo",
        {
          method: "GET",
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch profile info");
      }

      const data = await response.json();

      // API 응답 데이터에서 닉네임과 이미지 저장
      const { nickname, image } = data;

      if (nickname) {
        setNickname(nickname);
        localStorage.setItem("nickname", nickname);
      } else {
        throw new Error("Nickname is missing in profile data");
      }

      if (image) {
        setProfileImage(image);
        localStorage.setItem("profileImage", image);
      } else {
        throw new Error("Profile image is missing in profile data");
      }

      console.log("Profile info fetched successfully:", data);
    } catch (error) {
      console.error(error.message);
      alert("프로필 정보를 가져오지 못했습니다. 다시 로그인해주세요.");
      navigate("/"); // 로그인 페이지로 리다이렉트
    }
  };

  useEffect(() => {
    fetchProfileInfo();
  }, []);

  const goChild = () => {
    if (!selectedGender || !selectedAge) {
      alert("성별과 연령대를 선택해주세요."); // 선택하지 않은 경우 경고
      return;
    }

    // 선택한 성별과 연령대를 저장 (필요시 서버로 전달 가능)
    console.log("Selected Gender:", selectedGender);
    console.log("Selected Age:", selectedAge);

    // 다음 페이지로 이동
    navigate(`/child`);
  };

  const handleGenderClick = (gender) => {
    setSelectedGender(gender); // 클릭한 성별 설정
  };

  const handleAgeClick = (age) => {
    setSelectedAge(age); // 클릭한 연령대 설정
  };

  return (
    <G.Container>
      <G.ProfileImg>
        <img src={profileImage} alt={`${nickname}'s profile`} />
      </G.ProfileImg>
      <G.Nickname>{nickname}</G.Nickname>
      <G.InfoText>
        <G.HighlightText>성별, </G.HighlightText>
        <G.HighlightText>연령대</G.HighlightText>
        <span>를 선택해주세요.</span>
      </G.InfoText>

      {/* 성별 아이콘 버튼 */}
      <G.Male
        isSelected={selectedGender === "남성"}
        onClick={() => handleGenderClick("남성")}
      />
      <G.Female
        isSelected={selectedGender === "여성"}
        onClick={() => handleGenderClick("여성")}
      />

      {/* 연령대 선택 버튼 */}
      <div style={{ marginTop: "20px" }}>
        {["10대", "20대", "30대", "40대", "50대", "기타"].map((age) => (
          <G.AgeButton
            key={age}
            isSelected={selectedAge === age} // 선택 상태 전달
            onClick={() => handleAgeClick(age)} // 클릭 시 핸들러
          >
            {age}
          </G.AgeButton>
        ))}
      </div>

      {/* 다음 버튼 */}
      <G.NextBtn onClick={goChild} />
    </G.Container>
  );
}

export default Gender;
