import axios from "axios";
import { useEffect, useState } from "react";
import { ImSpinner6 } from "react-icons/im";
import { useGlobalContext } from "../context";

const InsertAnnouncement = () => {
  const { isAdmin } = useGlobalContext();
  const [isErr, setIsErr] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [subjectCode, setSubjectCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [announcement, setAnnouncement] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (subjectCode.length < 5 || announcement.length === 0) {
      setLoading(false);
      setIsErr(1);
      setErrMsg("Please provide valid input");
      return;
    }
    try {
      const token = document.cookie.slice(14);
      const { data } = await axios.post(
        "https://irms.onrender.com/api/admin/notif",
        {
          subjectCode,
          announcement,
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
      setErrMsg(error.response.data.msg);
    }
    setAnnouncement("");
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
    <div style={{ marginTop: "1rem" }}>
      <h2 className="section-headings">Insert Announcement</h2>
      <form className="record-search" onSubmit={handleSubmit}>
        <input
          type="text"
          className="login-input login-input-alt"
          placeholder="Subject Code"
          value={subjectCode}
          onChange={(e) => setSubjectCode(e.target.value)}
          style={{ marginTop: "0.5rem" }}
        />
        <textarea
          className="login-input login-input-alt"
          placeholder="Announcement"
          value={announcement}
          onChange={(e) => setAnnouncement(e.target.value)}
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

export default InsertAnnouncement;
