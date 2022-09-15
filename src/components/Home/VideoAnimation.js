import React from "react";
import videoAnimation from "../../assets/video/home_video.mp4";

function VideoAnimation() {
  return (
    <>
      <video
        className="h-[600px] w-[100%] object-cover rounded-2xl my-4"
        autoPlay
        muted
        loop
      >
        <source src={videoAnimation} type="video/mp4" />
      </video>
    </>
  );
}

export default VideoAnimation;
