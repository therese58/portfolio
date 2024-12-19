import React from 'react'

export default function profile() {
  return (
    <div className='mw d-flex justify-content-center'>
    // 소개
      <div className="d-flex flex-column align-items-start gap-3 position-relative">
        <div className="w-50 d-flex flex-column align-items-end mb32 position-relative">
          <div
            className="bg-secondary rounded-start rounded-end w-100 mb-3"
            style={{ height: "500px" }}
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

      <div className="d-flex justify-content-between align-items-start">
        <div className="container d-flex flex-column my-4 gap-5">
          {/* Education Title */}
          <div className="education">
            <div className="mb-4">
              <div className="kr-h3">Education</div>
            </div>

            <div className='d-flex flex-column gap-4'>
              <div className="d-flex flex-column gap-2">
                <span className="kr-bold">
                  중원고등학교 졸업
                </span>
                <div className="text-muted kr-body">
                  2015.03 - 2017.02
                </div>
              </div>

              <div className="d-flex flex-column gap-2">
                <span className="kr-bold">
                  중원고등학교 졸업
                </span>
                <div className="text-muted kr-body">
                  2015.03 - 2017.02
                </div>
              </div>

              <div className="d-flex flex-column gap-2">
                <span className="kr-bold">
                  중원고등학교 졸업
                </span>
                <div className="text-muted kr-body">
                  2015.03 - 2017.02
                </div>
              </div>
            </div>


          </div>

          <div className="career">
            <div className="mb-4">
              <div className="kr-h3">Career</div>
            </div>

            {/* Career Title */}
            <div className='d-flex flex-column gap-4'>
              <div className="d-flex flex-column gap-2">
                <span className="kr-bold">
                  주 히든템 기획팀 디자이너 (대리)
                </span>
                <div className="text-muted kr-body">
                  2022.08 ~ 2024.02 (2년 9개월)
                </div>
              </div>

              <div className="d-flex flex-column gap-2">
                <span className="kr-bold">
                  중원고등학교 졸업
                </span>
                <div className="text-muted kr-body">
                  2015.03 - 2017.02
                </div>
              </div>

              <div className="d-flex flex-column gap-2">
                <span className="kr-bold">
                  중원고등학교 졸업
                </span>
                <div className="text-muted kr-body">
                  2015.03 - 2017.02
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container d-flex flex-column my-4 gap-5">
          {/* Skills Title */}
          <div className="education">
            <div className="mb-4">
              <div className="kr-h3">Skills</div>
            </div>

            <div className='d-flex flex-column gap-4'>
              <div className="d-flex flex-column gap-3">
                <span className="kr-bold">
                  Photoshop
                </span>
                <span className="kr-bold">
                  Illustrator
                </span>
                <span className="kr-bold">
                  Premiere
                </span>
                <span className="kr-bold">
                  Figma
                </span>
                <span className="kr-bold">
                  HTML / CSS
                </span>
                <span className="kr-bold">
                  React
                </span>
                <span className="kr-bold">
                  javascript
                </span>
              </div>

              <div className="d-flex flex-column gap-2">
                <span className="kr-bold">
                  중원고등학교 졸업
                </span>
                <div className="text-muted kr-body">
                  2015.03 - 2017.02
                </div>
              </div>
            </div>


          </div>

          <div className="certificate">
            <div className="mb-4">
              <div className="kr-h3">Certificate</div>
            </div>

            {/* Certificate Title */}
            <div className='d-flex flex-column gap-4'>
              <div className="d-flex gap-2">
                <span className="kr-bold">
                  GTQi 1급
                </span>
                <div className="text-muted kr-body">
                  한국생산성본부
                </div>
              </div>
              <div className="d-flex gap-2">
                <span className="kr-bold">
                  GTQ 1급
                </span>
                <div className="text-muted kr-body">
                한국생산성본부
                </div>
              </div>
              <div className="d-flex gap-2">
                <span className="kr-bold">
                  JLPT 2급
                </span>
                <div className="text-muted kr-body">
                  뭐였더라
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>


    </div>

  );
}
