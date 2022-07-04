import { useState } from "react";
import Student from "./student";
import Admin from "./admin";

const Announcements = () => {
  const [tabs, setTabs] = useState([1, 0]);

  return (
    <>
      <div className="tab-navbar">
        <div
          className="navbar-single-link"
          onClick={() => setTabs([1, 0, 0, 0])}
          style={{ color: tabs[0] ? "yellow" : "white" }}
        >
          View Announcements
        </div>
        <div
          className="navbar-single-link"
          onClick={() => setTabs([0, 1, 0, 0])}
          style={{ color: tabs[1] ? "yellow" : "white" }}
        >
          Insert Announcements
        </div>
      </div>
      <div className="update">
        {tabs[0] ? <Student /> : <></>}
        {tabs[1] ? <Admin /> : <></>}
      </div>
    </>
  );
};

export default Announcements;
