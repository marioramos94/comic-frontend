import React from "react";
import Views from "./Views";
import Transcript from "./Transcript";

function Comic({ safe_title, img, views, transcript, date = "20/06/2022" }) {
  return (
    <div className="comic">
      <div className="comic-image-container">
        <img className="comic-image" src={img} alt="comic" />
      </div>
      <div className="comic-desc-container">
        <div className="comic-desc">
          <div className="comic-title">{safe_title}</div>
          <Views views={views}></Views>
          <div className="comic-published-date">Publish date {date}</div>
          <div>
            Transcript:
            <div className="transcript-container">
              <Transcript transcript={transcript} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comic;
