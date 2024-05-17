import React from "react";
import AnimationWrapper from "./AnimationWrapper";

const AnimationUsingFile = () => {
  return (
    <div>
    <div className="h-screen bg-red-300 flex items-center justify-center">
      <h1>Scroll Down</h1>
    </div>
    
    <AnimationWrapper direction="bottom" threshold={0.5}>
      <div className="h-screen bg-blue-300 flex items-center justify-center">
        <h1>Animate from Bottom</h1>
      </div>
    </AnimationWrapper>
    
    <AnimationWrapper direction="top" threshold={0.5}>
      <div className="h-screen bg-green-300 flex items-center justify-center">
        <h1>Animate from Top</h1>
      </div>
    </AnimationWrapper>
    
    <AnimationWrapper direction="left" threshold={0.5}>
      <div className="h-screen bg-yellow-300 flex items-center justify-center">
        <h1>Animate from Left</h1>
      </div>
    </AnimationWrapper>
    
    <AnimationWrapper direction="right" threshold={0.5}>
      <div className="h-screen bg-pink-300 flex items-center justify-center">
        <h1>Animate from Right</h1>
      </div>
    </AnimationWrapper>
    
    <div className="h-screen bg-red-300 flex items-center justify-center">
      <h1>Scroll Up</h1>
    </div>
  </div>
  );
};

export default AnimationUsingFile;
