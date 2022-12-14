import axios from "axios";
import { useEffect, useState } from "react";
import { ImSpinner6 } from "react-icons/im";
import { useGlobalContext } from "../context";
import { MdDelete } from "react-icons/md";

const View = () => {
  const { isAdmin } = useGlobalContext();
  const [isErr, setIsErr] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [subjectCode, setSubjectCode] = useState("");
  const [onDisplay, setOnDisplay] = useState("");
  const [loading, setLoading] = useState(false);
  const [announcements, setAnnouncements] = useState([]);

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
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
        `http://localhost:5000/api/${route}/notif/${subjectCode}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setOnDisplay(subjectCode);
      setAnnouncements(data.notifications);
      setLoading(false);
      setIsErr(2);
      setErrMsg(data.msg);
    } catch (error) {
      setAnnouncements([]);
      setLoading(false);
      setIsErr(1);
      setErrMsg(error.response.data.msg);
    }
    setSubjectCode("");
  };

  const removeAnnouncement = async (_id) => {
    setLoading(true);
    try {
      const token = document.cookie.slice(14);
      const { data } = await axios.delete(
        `http://localhost:5000/api/admin/notif/${onDisplay}/${_id}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setLoading(false);
      setIsErr(2);
      console.log(data);
      setErrMsg(data.msg);
      const { data: info } = await axios.get(
        `http://localhost:5000/api/admin/notif/${onDisplay}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setAnnouncements(info.notifications);
    } catch (error) {
      setLoading(false);
      setIsErr(1);
      setErrMsg(error.response.data.msg);
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
      <div className="announcements">
        {announcements.map((item, index) => {
          const { _id, announcement } = item;
          return (
            <h5
              style={{
                gridColumn: "2",
                background: "hsl(205, 86%, 95%)",
                boxShadow: "0 0 3px",
                display: isAdmin ? "flex" : "block",
              }}
              key={_id}
            >
              <div style={{ flexGrow: "1" }}>
                {index + 1}. {announcement}{" "}
              </div>
              {isAdmin ? (
                <button
                  style={{ background: "hsl(205, 86%, 95%)", border: "none" }}
                  onClick={() => removeAnnouncement(_id)}
                >
                  <MdDelete color="red" />
                </button>
              ) : (
                <></>
              )}
            </h5>
          );
        })}
      </div>
    </div>
  );
};

export default View;
