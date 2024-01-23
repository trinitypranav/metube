import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  // console.log(info);
  return (
    <div className="w-72 p-2 m-2 border rounded-xl shadow-lg">
      <img alt="video" src={snippet.thumbnails.medium.url} />
      <h1 className="font-semibold">{snippet.title}</h1>
      <span className="text-sm">{snippet.channelTitle}</span>
      <span className="text-xs "> ({statistics.viewCount} views)</span>
    </div>
  );
};

export default VideoCard;
