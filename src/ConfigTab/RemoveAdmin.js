import axios from "axios";
import { useEffect, useState } from "react";
import { useGlobalContext } from "../context";

const RemoveAdmin = () => {
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
        setIsErr(2);
        setErrMsg(data.msg);
        setEmail("");
      } catch (error) {
        setIsErr(1);
        setErrMsg("Please recheck details");
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
