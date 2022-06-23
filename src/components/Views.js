import React from "react";
import { AiOutlineEye } from "react-icons/ai";

function Views({ views }) {
  return (
    <div className="comic-views">
      <AiOutlineEye />
      <div> {views} views</div>
    </div>
  );
}

export default Views;
