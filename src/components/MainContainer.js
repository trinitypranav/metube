import React from "react";
import ButtonsList from "./ButtonsList";
import VideosContainer from "./VideosContainer";

const MainContainer = () => {
  return (
    <div className="w-auto">
      <ButtonsList />
      <VideosContainer />
    </div>
  );
};

export default MainContainer;
