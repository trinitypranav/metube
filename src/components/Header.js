import React from "react";

const Header = () => {
  return (
    <div className="grid grid-flow-col p-2 shadow-md">
      <div id="left-section" className="col-span-1 flex">
        <img
          alt="sidebar"
          src="https://cdn0.iconfinder.com/data/icons/rounded-basics/24/rounded__menu-512.png"
          className="w-12"
        />
        <img
          alt="metube-logo"
          src="https://cdn-icons-png.flaticon.com/256/1384/1384060.png"
          className="w-12 mx-20"
        />
      </div>
      <div id="search-section" className="col-span-10 text-center self-center">
        <input
          className="p-2 px-5 border w-1/2 rounded-l-xl text-xl outline-none"
          type="text"
        />
        <button className="border py-2 px-4 rounded-r-xl text-xl">
          Search
        </button>
      </div>
      <div id="user-section" className="col-span-1">
        <img
          className="w-12"
          alt="user-profile"
          src="https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black-thumbnail.png"
        />
      </div>
    </div>
  );
};

export default Header;
