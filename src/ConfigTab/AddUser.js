import axios from "axios";
import { useEffect, useState } from "react";
import { ImSpinner6 } from "react-icons/im";

const AddUser = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [entryNumber, setEntryNumber] = useState("");
  const [degree, setDegree] = useState("");
  const [isErr, setIsErr] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();
    const answer = window.confirm("Are the details correct?");
    if (answer) {
      setLoading(true);
      try {
        const token = localStorage.getItem("Authorization");
        const { data } = await axios.post(
          "https://irms-server.herokuapp.com/api/admin/register/user",
          { name, entryNumber, degree },
          {
            headers: {
              Authorization: token,
            },
          }
        );
        setLoading(false);
        setIsErr(2);
        setErrMsg(data.msg);
      } catch (error) {
        setLoading(false);
        setIsErr(1);
        setErrMsg("User already exists");
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
      <h2 className="section-headings">Add Student</h2>
      <form className="record-search" onSubmit={handleUpdate}>
        <input
          type="text"
          className="login-input login-input-alt"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          className="login-input login-input-alt"
          placeholder="Entry Number"
          value={entryNumber}
          onChange={(e) => setEntryNumber(e.target.value)}
          style={{ marginTop: "0.5rem" }}
        />
        <select
          className="login-input login-input-alt"
          style={{ marginTop: "0.5rem" }}
          onChange={(e) => setDegree(e.target.value)}
        >
          <option value="" disabled selected>
            Select the Degree
          </option>
          <option value="B.Tech">B.Tech</option>
          <option value="M.Tech">M.Tech</option>
          <option value="PhD">PhD</option>
        </select>

        <button
          type="submit"
          className="submit-btn submit-btn-alt"
          style={{ marginTop: "0.5rem" }}
        >
          Register
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

export default AddUser;
