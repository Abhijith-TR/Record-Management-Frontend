import axios from "axios";
import { useEffect, useState } from "react";
import { useGlobalContext } from "../context";
import { ImSpinner6 } from "react-icons/im";

const RemoveAdmin = () => {
  const [loading, setLoading] = useState(false);
  const { currUser } = useGlobalContext();
  const [email, setEmail] = useState("");
  const [isErr, setIsErr] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();
    const answer = window.confirm("Are you sure you wish to delete?");
    if (email === currUser) {
      setIsErr(1);
      setErrMsg("You cannot delete the super admin");
      return;
    }
    if (answer) {
      setLoading(true);
      try {
        const token = localStorage.getItem("Authorization");
        const { data } = await axios.delete(
          `https://irms-server.herokuapp.com/api/super/delete/admin/${email}`,
          {
            headers: {
              Authorization: token,
            },
          }
        );
        setLoading(false);
        setIsErr(2);
        setErrMsg(data.msg);
        setEmail("");
      } catch (error) {
        setLoading(false);
        setIsErr(1);
        setErrMsg("No such admin exists");
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
      <h2 className="section-headings">Remove Admin</h2>
      <form className="record-search" onSubmit={handleUpdate}>
        <input
          type="text"
          className="login-input login-input-alt"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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

export default RemoveAdmin;
