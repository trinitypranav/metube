import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDark } from "./store/slices/darkSlice";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
]);

// console.log(process.env.REACT_APP_YOUTUBE_VIDEOS_API);

function App() {
  const darkTheme = useSelector((state) => state.dark.dark);
  const dispatch = useDispatch();

  useEffect(() => {
    if (window.localStorage.getItem("DarkTheme") !== null) {
      dispatch(setDark(window.localStorage.getItem("DarkTheme")));
    }
  }, []);

  useEffect(() => {
    if (darkTheme === true) {
      document.getElementById("html").classList.add("dark");
      dispatch(setDark(darkTheme));
    } else {
      document.getElementById("html").classList.remove("dark");
      dispatch(setDark(darkTheme));
    }

    window.localStorage.setItem("DarkTheme", JSON.stringify(darkTheme));
  }, [darkTheme]);

  return (
    <div className="App">
      <Header />
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
