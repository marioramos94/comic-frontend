import React from "react";

function Transcript({ transcript = "" }) {
  return transcript.split("\n").map((transcriptRow, key) => {
    return <div key={key}>{transcriptRow}</div>;
  });
}

export default Transcript;
