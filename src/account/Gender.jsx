import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as G from "./styledGender";

export function AgeSelection() {
  const ages = ["10대", "20대", "30대", "40대", "50대", "기타"];
  const [selectedAge, setSelectedAge] = useState(null); // 선택된 연령대 상태

  const handleClick = (age) => {
    setSelectedAge(age); // 클릭한 연령대 설정
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh", // 화면 전체 높이 사용
      }}
    >
      {/* 자동으로 밀려서 아래로 배치되도록 margin-top 설정 */}
      <div style={{ marginTop: "auto", marginBottom: "20px" }}>
        {/* 1행 */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          {ages.slice(0, 3).map((age) => (
            <G.AgeButton
              key={age}
              isSelected={selectedAge === age} // 선택 상태 전달
              onClick={() => handleClick(age)} // 클릭 시 핸들러
            >
              {age}
            </G.AgeButton>
          ))}
        </div>
        {/* 2행 */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          {ages.slice(3).map((age) => (
            <G.AgeButton
              key={age}
              isSelected={selectedAge === age} // 선택 상태 전달
              onClick={() => handleClick(age)} // 클릭 시 핸들러
            >
              {age}
            </G.AgeButton>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Gender() {
  const navigate = useNavigate();

  const goChild = () => {
    navigate(`/child`);
  };

  const [selectedGender, setSelectedGender] = useState(null); // 선택된 성별 상태

  const handleGenderClick = (gender) => {
    setSelectedGender(gender); // 클릭한 성별 설정
  };

  return (
    <G.Container>
      <G.ProfileImg>
        <img src="/images/ProfileImg.svg" alt="프로필 이미지" />
      </G.ProfileImg>
      <G.Nickname>홍길동</G.Nickname>
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
      {/* 연령대 선택 컴포넌트 */}
      <AgeSelection />
      <G.NextBtn onClick={goChild} />
    </G.Container>
  );
}

export default Gender;
