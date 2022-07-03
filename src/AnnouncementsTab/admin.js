import axios from "axios";
import { useEffect, useState } from "react";
import { ImSpinner6 } from "react-icons/im";

const Admin = () => {
  const [isErr, setIsErr] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [subjectCode, setSubjectCode] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpdate = () => {};

  return (
    <div className="center-form">
      <h2 className="section-headings">Remove Subject Records</h2>
      <form className="record-search" onSubmit={handleUpdate}>
        <input
          type="text"
          className="login-input login-input-alt"
          placeholder="Subject Code"
          value={subjectCode}
          onChange={(e) => setSubjectCode(e.target.value)}
          style={{ marginTop: "0.5rem" }}
        />

        <button
          type="submit"
          className="submit-btn submit-btn-alt"
          style={{ marginTop: "0.5rem" }}
        >
          Delete
        </button>
      </form>
      <div className="error" style={{ color: "black" }}>
        {loading ? <ImSpinner6 className="spinner" size={30} /> : <></>}
      </div>
      <div
        className="error"
        style={{ color: isErr === 2 ? "green" : "tomato" }}
      >
        {isErr ? errMsg : ""}
      </div>
    </div>
  );
};

export default Admin;
