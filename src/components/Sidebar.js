import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isSidebarOpen = useSelector((state) => state.app.isSidebarOpen);
  if (!isSidebarOpen) return null;
  return (
    <div className="w-40 border p-2">
      <ul>
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <li>Shorts</li>
        <li>Subscription</li>
      </ul>
      <h1 className="font-bold m-2">For you</h1>
      <ul>
        <li>Watchlist</li>
        <li>Saved Videos</li>
        <li>History</li>
        <li>Watch Later</li>
      </ul>
      <h1 className="font-bold m-2">Subscriptions</h1>
      <ul>
        <li>Scaler</li>
        <li>FreeCodeCamps</li>
        <li>Namaste Dev</li>
        <li>Gaurav Sen</li>
      </ul>
    </div>
  );
};

export default Sidebar;
