import AddSubject from "./AddSubject";
import UpdateRecord from "./UpdateRecord";
import DeleteRecord from "./DeleteRecord";
import { useGlobalContext } from "../context";
import { useState } from "react";
import InsertRecord from "./Insert";

const UpdateTab = () => {
  const { isAdmin } = useGlobalContext();
  const [tabs, setTabs] = useState([1, 0, 0, 0]);

  if (isAdmin === 0) {
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
          onClick={() => setTabs([1, 0, 0, 0])}
          style={{ color: tabs[0] ? "yellow" : "white" }}
        >
          Insert Record
        </div>
        <div
          className="navbar-single-link"
          onClick={() => setTabs([0, 1, 0, 0])}
          style={{ color: tabs[1] ? "yellow" : "white" }}
        >
          Update Record
        </div>
        <div
          className="navbar-single-link"
          onClick={() => setTabs([0, 0, 1, 0])}
          style={{ color: tabs[2] ? "yellow" : "white" }}
        >
          Add Subject
        </div>
        <div
          className="navbar-single-link"
          onClick={() => setTabs([0, 0, 0, 1])}
          style={{ color: tabs[3] ? "yellow" : "white" }}
        >
          Delete Record
        </div>
      </div>
      <div className="update">
        {tabs[0] ? <InsertRecord /> : <></>}
        {tabs[1] ? <UpdateRecord /> : <></>}
        {tabs[2] ? <AddSubject /> : <></>}
        {tabs[3] ? <DeleteRecord /> : <></>}
      </div>
    </>
  );
};

export default UpdateTab;
