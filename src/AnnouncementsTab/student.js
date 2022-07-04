import axios from "axios";
import { useEffect, useState } from "react";
import { ImSpinner6 } from "react-icons/im";
import { useGlobalContext } from "../context";

const Student = () => {
  const { isAdmin } = useGlobalContext();
  const [isErr, setIsErr] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [subjectCode, setSubjectCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [announcements, setAnnouncements] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (subjectCode.length < 5) {
      setLoading(false);
      setIsErr(1);
      setErrMsg("Please provide valid input");
      return;
    }
    try {
      const token = document.cookie.slice(14);
      const route = isAdmin ? "admin" : "user";
      const { data } = await axios.get(
        `https://irms-server.herokuapp.com/api/${route}/notif/${subjectCode}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log(data.notifications);
      setAnnouncements(data.notifications);
      setLoading(false);
      setIsErr(2);
      setErrMsg(data.msg);
    } catch (error) {
      setLoading(false);
      setIsErr(1);
      setErrMsg(error.response.data.msg);
    }
    setSubjectCode("");
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
    <div style={{ marginTop: "1rem" }}>
      <h2 className="section-headings">View Announcements</h2>
      <form className="record-search" onSubmit={handleSubmit}>
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
          View
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

export default Student;
