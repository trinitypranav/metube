import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../store/slices/appSlice";
import { cacheResults } from "../store/slices/searchCacheSlice";
import { Link, Navigate } from "react-router-dom";
import { toggle } from "../store/slices/darkSlice";
const Header = () => {
  const dispatch = useDispatch();
  const isDarkModeOn = useSelector((state) => state.dark.dark);
  // console.log("dark mode is ", isDarkModeOn);

  const searchCache = useSelector((state) => state.searchCache);

  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  // console.log(searchText);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchText]) {
        console.log("from cache");
        setSuggestions(searchCache[searchText]);
      } else {
        getSuggestions(searchText);
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  const getSuggestions = async (searchText) => {
    if (searchText === "") {
      setSuggestions([]);
      return null;
    }
    console.log(process.env.REACT_APP_YOUTUBE_SEARCH_API);
    const data = await fetch(
      process.env.REACT_APP_YOUTUBE_SEARCH_API + searchText
    );
    const response = await data.json();
    console.log("setting suggestions to ", response);
    setSuggestions(response);
    dispatch(cacheResults({ [searchText]: response }));
  };

  return (
    <div className="grid grid-flow-col p-2 shadow-md dark:bg-gray-800">
      <div id="left-section" className="col-span-1 flex">
        <img
          onClick={() => dispatch(toggleSidebar())}
          alt="sidebar"
          src="https://cdn0.iconfinder.com/data/icons/rounded-basics/24/rounded__menu-512.png"
          className="w-12"
        />

        <img
          alt="metube-logo"
          src="https://cdn-icons-png.flaticon.com/256/1384/1384060.png"
          className="w-12 mx-20"
          onClick={() => (window.location.pathname = "/")}
        />
      </div>
      <div id="search-section" className="col-span-10">
        <input
          className="p-2 px-5 border w-1/2 rounded-l-xl text-xl outline-none"
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
        />
        <button className="border py-2 px-4 rounded-r-xl text-xl">
          Search
        </button>
        {showSuggestions && suggestions.length > 0 && (
          <div className="fixed bg-white p-5 border">
            <ul>
              {suggestions.map((s) => {
                return (
                  <div key={s} className="py-1 cursor-pointer">
                    🔍 {s}
                  </div>
                );
              })}
            </ul>
          </div>
        )}
      </div>

      <div id="user-section" className="flex">
        <div
          className="mx-5 text-4xl self-center"
          onClick={() => {
            console.log("asdads");
            dispatch(toggle());
          }}
        >
          {isDarkModeOn ? "🌞" : "🌚"}
        </div>
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
