import axios from "axios";
import { useEffect, useState } from "react";

const ClearSubject = () => {
  const [subjectCode, setSubjectCode] = useState("");
  const [isErr, setIsErr] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();
    const answer = window.confirm("Are you sure you wish to delete?");
    if (answer) {
      try {
        const token = localStorage.getItem("Authorization");
        const { data } = await axios.delete(
          `https://irms-server.herokuapp.com/api/super/delete/records/${subjectCode}`,
          {
            headers: {
              Authorization: token,
            },
          }
        );
        setIsErr(2);
        setErrMsg(data.msg);
        setSubjectCode("");
      } catch (error) {
        setIsErr(1);
        setErrMsg(error.response.data.msg);
      }
    } else {
      return;
    }
  };

  useEffect(() => {
    if (isErr) {
      const timeout = setTimeout(() => {
        setIsErr(0);
      }, 5000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [isErr]);

  return (
    <div style={{ border: "2px solid black", padding: "1.5rem" }}>
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
      <div
        className="error"
        style={{ color: isErr === 2 ? "green" : "tomato" }}
      >
        {isErr ? errMsg : ""}
      </div>
    </div>
  );
};

export default ClearSubject;