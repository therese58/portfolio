import React, { useEffect } from "react";

import styles from "./profile.module.scss";

export default function Profile() {
  useEffect(() => {
    if (window?.wcs && typeof window.wcs.trans === "function") {
      var _conv = {};
      _conv.type = "lead"; // 전환 유형 설정 lead는 리드 전환
      window.wcs.trans(_conv); // 전환 데이터 서버 전송
    } else {
      console.warn("wcs is not defined");
    }
  }, []);

  return (
    <div className="mw mt32 d-flex justify-content-center">
      <div className="d-flex justify-content-beteween">
        {/* 자기소개 */}
        <div className="d-flex flex-column align-items-start gap-3 position-relative">
          <div className="d-flex flex-column align-items-end mb32 position-relative">
            <div
              className="bg-secondary rounded-start rounded-end mt-4 mb-3"
              style={{ width: "300px", height: "400px" }}
            ></div>
            <p className="kr-body">Kwon Chae Ryeoung</p>
            <h2 className="kr-h2 position-absolute">권채령</h2>
          </div>

          <div className="w-auto d-flex flex-column align-items-start gap-3">
            <p className="kr-body">1993.11.19</p>
            <p className="kr-body">010.5006.4363</p>
            <p className="kr-body">thereseluce93@gmail.com</p>
          </div>
        </div>

        <div className="container d-flex flex-column my-4 gap-5">
          {/* Education Title */}
          <div className="education">
            <div className="mb-4">
              <div className="kr-h3">Education</div>
            </div>

            <div className="d-flex flex-column gap-4">
              <div className="d-flex flex-column gap-2">
                <div className="kr-bold">국제학부 편입 졸업</div>
                <div className="text-muted kr-body">2015.03 - 2017.02</div>
              </div>

              <div className="d-flex flex-column gap-2">
                <div className="kr-bold">간호학과 입학</div>
                <div className="text-muted kr-body">2015.03 - 2017.02</div>
              </div>

              <div className="d-flex flex-column gap-2">
                <div className="kr-bold">중원고등학교 졸업</div>
                <div className="text-muted kr-body">2015.03 - 2017.02</div>
              </div>

              <div className={`${styles.lineDivider}`}></div>

              <div className="d-flex flex-column gap-2">
                <div className="kr-bold">
                  [KDT]웹퍼블리셔(UIUX)&프론트엔드개발
                  <br />
                  (API,ChatGPT,피그마,리액트,뷰) 프로젝트 수료
                </div>
                <div className="text-muted kr-body">
                  2024.06 - 2024.12 (6개월)
                </div>
              </div>
            </div>
          </div>

          {/* Certificate Title */}
          <div className="certificate">
            <div className="mb-4">
              <div className="kr-h3">Certificate</div>
            </div>

            <div className="d-flex flex-column gap-4">
              <div className="d-flex gap-2">
                <div className="kr-bold">GTQi 1급</div>
                <div className="text-muted kr-body">한국생산성본부</div>
              </div>
              <div className="d-flex gap-2">
                <div className="kr-bold">GTQ 1급</div>
                <div className="text-muted kr-body">한국생산성본부</div>
              </div>
              <div className="d-flex gap-2">
                <div className="kr-bold">JLPT 2급</div>
                <div className="text-muted kr-body">뭐였더라</div>
              </div>
            </div>
          </div>
        </div>

        <div className="container d-flex flex-column my-4 gap-5">
          {/* Career Title */}
          <div className="career">
            <div className="mb-4">
              <div className="kr-h3">Career</div>
            </div>

            <div className="d-flex flex-column gap-4">
              <div className="d-flex flex-column gap-2">
                <div className="kr-bold">
                  주식회사 히든템 기획팀 디자이너 (대리)
                </div>
                <div className="text-muted kr-body">
                  2022.08 ~ 2024.02 (2년 6개월)
                </div>
              </div>

              <div className="d-flex flex-column gap-2">
                <div className="kr-bold">중원고등학교 졸업</div>
                <div className="text-muted kr-body">2015.03 - 2017.02</div>
              </div>

              <div className="d-flex flex-column gap-2">
                <div className="kr-bold">중원고등학교 졸업</div>
                <div className="text-muted kr-body">2015.03 - 2017.02</div>
              </div>
            </div>
          </div>

          {/* Skills Title */}
          <div className="skills">
            <div className="mb-4">
              <div className="kr-h3">Skills</div>
            </div>

            <div className="d-flex gap-4">
              <div className="d-flex flex-column gap-3">
                <div className="kr-bold">Photoshop</div>
                <div className="kr-bold">Illustrator</div>
                <div className="kr-bold">Premiere</div>
                <div className="kr-bold">Figma</div>
                <div className="kr-bold">HTML / CSS</div>
                <div className="kr-bold">React</div>
                <div className="kr-bold">javascript</div>
              </div>

              <div className="d-flex flex-column gap-3">
                <div className="kr-bold">●●●●●●●●</div>
                <div className="kr-bold">●●●●●●●●</div>
                <div className="kr-bold">●●●●●●●●</div>
                <div className="kr-bold">●●●●●●●●</div>
                <div className="kr-bold">●●●●●●●●</div>
                <div className="kr-bold">●●●●●●●●</div>
                <div className="kr-bold">●●●●●●●●</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
