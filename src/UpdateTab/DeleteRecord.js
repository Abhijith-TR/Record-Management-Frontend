import axios from "axios";
import { useEffect, useState } from "react";
import { ImSpinner6 } from "react-icons/im";

const DeleteRecord = () => {
  const [loading, setLoading] = useState(false);
  const [entryNumber, setEntryNumber] = useState("");
  const [subjectCode, setSubjectCode] = useState("");
  const [isErr, setIsErr] = useState(0);
  const [errMsg, setErrMsg] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();
    const answer = window.confirm("Delete this record?");
    if (answer) {
      setLoading(true);
      try {
        const token = document.cookie.slice(14);
        const { data } = await axios.delete(
          `https://localhost:3000/api/admin/records/${entryNumber}/${subjectCode}`,
          {
            headers: {
              Authorization: token,
            },
          }
        );
        setLoading(false);
        setIsErr(2);
        setErrMsg(data.msg);
        setEntryNumber("");
        setSubjectCode("");
      } catch (error) {
        setLoading(false);
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
    <div className="center-form">
      <h2 className="section-headings">Delete Record</h2>
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

export default DeleteRecord;
