import { useEffect, useState } from "react";
import axios from "axios";
import { ImSpinner6 } from "react-icons/im";

const AddSubject = () => {
  const [loading, setLoading] = useState(false);
  const [subjectName, setSubjectName] = useState("");
  const [subjectCode, setSubjectCode] = useState("");
  const [isErr, setIsErr] = useState(0);
  const [errMsg, setErrMsg] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const answer = window.confirm("Are the details correct?");
    if (answer) {
      setLoading(true);
      try {
        const token = document.cookie.slice(14);
        const { data } = await axios.post(
          "https://irms.onrender.com/api/admin/records",
          {
            subjectName,
            subjectCode,
          },
          {
            headers: {
              Authorization: token,
            },
          }
        );
        setLoading(false);
        setErrMsg(data.msg);
        setIsErr(2);
        setSubjectName("");
        setSubjectCode("");
      } catch (error) {
        setLoading(false);
        setIsErr(1);
        setErrMsg("Subject already exists");
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
      <h2 className="section-headings">Insert Subject</h2>
      <form className="record-search" onSubmit={handleSubmit}>
        <input
          type="text"
          className="login-input login-input-alt"
          placeholder="Subject Name"
          value={subjectName}
          onChange={(e) => setSubjectName(e.target.value)}
        />
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
          Insert
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

export default AddSubject;
