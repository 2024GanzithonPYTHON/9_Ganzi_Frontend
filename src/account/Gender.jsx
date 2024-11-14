import React, { useState, useEffect } from "react";
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
        marginTop: "20px",
      }}
    >
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
  );
}

export function Gender() {
  return (
    <>
      <G.Container>
        <G.ProfileImg>
          <img src="/images/ProfileImg.svg" />
        </G.ProfileImg>
        <G.InfoText>
          <G.HighlightText>성별, </G.HighlightText>
          <G.HighlightText>연령대</G.HighlightText>
          <span>를 선택해주세요.</span>
        </G.InfoText>
        <G.Male />
        <G.Female />
        <AgeSelection />
        <G.NextBtn />
      </G.Container>
    </>
  );
}

export default Gender;
