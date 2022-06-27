import { useEffect, useState } from "react";
import axios from "axios";

const Update = () => {
  const [isErr, setIsErr] = useState(0);
  const [errMsg, setErrMsg] = useState("");

  const handleUpdate = (e) => {
    e.preventDefault();
    const answer = window.confirm("Are the details correct?");
    if (answer) {
      const token = localStorage.getItem("Authorization");
      try {
        const { data } = axios.post();
        setIsErr(2);
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
        setIsErr(false);
      }, 3000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [isErr]);

  return (
    <div className="update">
      <div>
        <h2 className="section-headings">Insert Record</h2>
        <form className="record-search" onSubmit={handleUpdate}>
          <input
            type="text"
            className="login-input login-input-alt"
            placeholder="Entry Number / Subject Code"
          />
          <label style={{ textAlign: "center", marginTop: "0.4rem" }}>
            Subject Code
            <input
              type="checkbox"
              style={{ marginLeft: "0.5rem", marginTop: "0.2rem" }}
            />
          </label>
          <button
            type="submit"
            className="submit-btn submit-btn-alt"
            style={{ marginTop: "0.5rem" }}
          >
            Search
          </button>
        </form>
      </div>
      <div>Add subject</div>
      <div>Update Record</div>
      <div>Delete Record</div>
    </div>
  );
};

export default Update;
