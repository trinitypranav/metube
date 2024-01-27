import React from "react";

const buttons = [
  "All",
  "Music",
  "Programming",
  "Movies",
  "React",
  "Comedy",
  "News",
];

const ButtonsList = () => {
  return (
    <div className="p-2 flex flex-wrap border">
      {buttons.map((btn) => (
        <button key={btn} className="px-4 py-1 border m-2 rounded-lg">
          {btn}
        </button>
      ))}
    </div>
  );
};

export default ButtonsList;
