import { useState } from "react";
import View from "./view";
import Insert from "./insert";
import { useGlobalContext } from "../context";

const Announcements = () => {
  const { isAdmin } = useGlobalContext();
  const [tabs, setTabs] = useState([1, 0]);

  return (
    <>
      <div className="tab-navbar">
        <div
          className="navbar-single-link"
          onClick={() => setTabs([1, 0])}
          style={{ color: tabs[0] ? "yellow" : "white" }}
        >
          {isAdmin ? "View / Remove" : "View"}
        </div>
        <div
          className="navbar-single-link"
          onClick={() => setTabs([0, 1])}
          style={{ color: tabs[1] ? "yellow" : "white" }}
        >
          Insert
        </div>
      </div>
      <div className="update">
        {tabs[0] ? <View /> : <></>}
        {tabs[1] ? <Insert /> : <></>}
      </div>
    </>
  );
};

export default Announcements;
