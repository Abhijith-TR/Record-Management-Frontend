import { useEffect, useState } from "react";
import axios from "axios";
import { ImSpinner6 } from "react-icons/im";

const UpdateRecord = () => {
  const [loading, setLoading] = useState(false);
  const [entryNumber, setEntryNumber] = useState("");
  const [subjectCode, setSubjectCode] = useState("");
  const [grade, setGrade] = useState("");
  const [isErr, setIsErr] = useState(0);
  const [errMsg, setErrMsg] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();
    const answer = window.confirm("Are you sure you want to update?");
    if (answer) {
      setLoading(true);
      try {
        const token = document.cookie.slice(14);
        const { data } = await axios.patch(
          `https://localhost:3000/api/admin/records/${entryNumber}/${subjectCode}`,
          {
            grade,
          },
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
        setErrMsg("Please check info");
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
    <div className="center-form">
      <h2 className="section-headings">Update Grade</h2>
      <form className="record-search" onSubmit={handleUpdate}>
        <input
          type="text"
          className="login-input login-input-alt"
          placeholder="Entry Number"
          value={entryNumber}
          onChange={(e) => setEntryNumber(e.target.value)}
        />
        <input
          type="text"
          className="login-input login-input-alt"
          placeholder="Subject Code"
          value={subjectCode}
          onChange={(e) => setSubjectCode(e.target.value)}
          style={{ marginTop: "0.5rem" }}
        />
        <select
          className="login-input login-input-alt"
          style={{ marginTop: "0.5rem" }}
          onChange={(e) => setGrade(e.target.value)}
        >
          <option value="" disabled selected>
            Select the New Grade
          </option>
          <option value="A">A</option>
          <option value="A-">A-</option>
          <option value="B">B</option>
          <option value="B-">B-</option>
          <option value="C">C</option>
          <option value="C-">C-</option>
          <option value="D">D</option>
          <option value="E">E</option>
          <option value="F">F</option>
          <option value="NP">NP</option>
          <option value="NF">NF</option>
          <option value="I">I</option>
          <option value="W">W</option>
          <option value="-">-</option>
        </select>
        <button
          type="submit"
          className="submit-btn submit-btn-alt"
          style={{ marginTop: "0.5rem" }}
        >
          Update
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

export default UpdateRecord;
