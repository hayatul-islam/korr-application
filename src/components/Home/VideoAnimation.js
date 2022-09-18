import React from "react";
import videoAnimation from "../../assets/video/home_video.mp4";

function VideoAnimation() {
  return (
    <>
      <div className="md:px-6 my-4">
        <video
          className=" lg:h-[600px] w-full md:rounded-2xl object-cover "
          autoPlay
          muted
          loop
        >
          <source src={videoAnimation} type="video/mp4" />
        </video>
      </div>
    </>
  );
}

export default VideoAnimation;
