import { useEffect, useState } from "react";
import axios from "axios";

const Insert = () => {
  const [entryNumber, setEntryNumber] = useState("");
  const [grade, setGrade] = useState("");
  const [subjectCode, setSubjectCode] = useState("");
  const [semester, setSemester] = useState("");
  const [isErr, setIsErr] = useState(0);
  const [errMsg, setErrMsg] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();
    const answer = window.confirm("Are the details correct?");
    if (answer) {
      const token = localStorage.getItem("Authorization");
      try {
        console.log(entryNumber, grade, subjectCode, semester);
        const { data } = await axios.post(
          "https://irms-server.herokuapp.com/api/admin/records/single",
          {
            entryNumber,
            grade,
            subjectCode,
            semester,
          },
          {
            headers: {
              Authorization: token,
            },
          }
        );
        setErrMsg(data.msg);
        setIsErr(2);
        setErrMsg(data.msg);
      } catch (error) {
        setIsErr(1);
        setErrMsg("Please check the entry again");
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
    <div>
      <h2 className="section-headings">Insert Record</h2>
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
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
        >
          <option value="" disabled selected style={{}}>
            Select the Grade
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
        <select
          className="login-input login-input-alt"
          style={{ marginTop: "0.5rem" }}
          value={semester}
          onChange={(e) => setSemester(e.target.value)}
        >
          <option value="" disabled selected style={{}}>
            Select the Semester
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
        </select>
        <button
          type="submit"
          className="submit-btn submit-btn-alt"
          style={{ marginTop: "0.5rem" }}
        >
          Insert
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

export default Insert;
