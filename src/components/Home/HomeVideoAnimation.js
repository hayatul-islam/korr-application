import React from "react";
import home_video from "../../assets/video/home_video.mp4";
import VideoAnimation from "../common/VideoAnimation";

function HomeVideoAnimation() {
  return (
    <>
      <VideoAnimation video={home_video} />
    </>
  );
}

export default HomeVideoAnimation;
