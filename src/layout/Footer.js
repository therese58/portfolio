import React, { useEffect, useState } from "react";

const Footer = () => {
  const [currentSection, setCurrentSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY; // 현재 스크롤 위치
      const windowHeight = window.innerHeight; // 뷰포트 높이
      const sections = document.querySelectorAll("section"); // 모든 섹션 가져오기

      sections.forEach((section) => {
        const sectionTop = section.offsetTop; // 섹션의 상단 위치
        const sectionHeight = section.offsetHeight; // 섹션의 높이

        if (
          scrollY + windowHeight / 2 >= sectionTop && // 스크롤 중간이 섹션 시작보다 크거나 같고
          scrollY + windowHeight / 2 < sectionTop + sectionHeight // 섹션 끝보다 작으면
        ) {
          setCurrentSection(section.getAttribute("id")); // 현재 섹션 ID 업데이트
        }
      });
    };

    window.addEventListener("scroll", handleScroll); // 스크롤 이벤트 리스너 추가
    return () => {
      window.removeEventListener("scroll", handleScroll); // 컴포넌트 언마운트 시 이벤트 제거
    };
  }, []);

  const getFooterContent = () => {
    switch (currentSection) {
      case "home":
        return <p>메인 페이지 Footer입니다.</p>;
      case "profile":
        return <p>프로필 페이지 Footer입니다.</p>;
      case "project":
        return <p>프로젝트 페이지 Footer입니다.</p>;
      case "contact":
        return <p>연락처 페이지 Footer입니다.</p>;
      default:
        return <p>기본 Footer입니다.</p>;
    }
  };

  return <footer>{getFooterContent()}</footer>;
};

export default Footer;
