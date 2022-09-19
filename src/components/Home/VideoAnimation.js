import { motion } from "framer-motion";
import React from "react";
import videoAnimation from "../../assets/video/home_video.mp4";

function VideoAnimation() {
  return (
    <>
      <motion.div
        className="box"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 0.8,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
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
      </motion.div>
    </>
  );
}

export default VideoAnimation;
