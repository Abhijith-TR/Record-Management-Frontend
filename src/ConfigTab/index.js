import AddAdmin from "./AddAdmin";
import AddUser from "./AddUser";
import RemoveAdmin from "./RemoveAdmin";
import RemoveUser from "./RemoveUser";
import ClearSubject from "./ClearSubject";
import { useGlobalContext } from "../context";
import { useState } from "react";

const Admin = () => {
  const [tabs, setTabs] = useState([1, 0, 0, 0, 0]);
  const { isAdmin } = useGlobalContext();

  if (isAdmin === 0 || isAdmin === 1) {
    return (
      <div className="access-denied">
        <h1 style={{ textAlign: "center" }}>
          Unauthorized to access this page
        </h1>
      </div>
    );
  }

  return (
    <>
      <div className="tab-navbar">
        <div
          className="navbar-single-link"
          onClick={() => setTabs([1, 0, 0, 0, 0])}
          style={{ color: tabs[0] ? "yellow" : "white" }}
        >
          Add Admin
        </div>
        <div
          className="navbar-single-link"
          onClick={() => setTabs([0, 1, 0, 0, 0])}
          style={{ color: tabs[1] ? "yellow" : "white" }}
        >
          Add User
        </div>
        <div
          className="navbar-single-link"
          onClick={() => setTabs([0, 0, 1, 0, 0])}
          style={{ color: tabs[2] ? "yellow" : "white" }}
        >
          Remove Admin
        </div>
        <div
          className="navbar-single-link"
          onClick={() => setTabs([0, 0, 0, 1, 0])}
          style={{ color: tabs[3] ? "yellow" : "white" }}
        >
          Remove User
        </div>
        <div
          className="navbar-single-link"
          onClick={() => setTabs([0, 0, 0, 0, 1])}
          style={{ color: tabs[4] ? "yellow" : "white" }}
        >
          Clear Subject
        </div>
      </div>
      <div className="update">
        {tabs[0] ? <AddAdmin /> : <></>}
        {tabs[1] ? <AddUser /> : <></>}
        {tabs[2] ? <RemoveAdmin /> : <></>}
        {tabs[3] ? <RemoveUser /> : <></>}
        {tabs[4] ? <ClearSubject /> : <></>}
      </div>
    </>
  );
};

export default Admin;
