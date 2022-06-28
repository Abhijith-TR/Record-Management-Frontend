import axios from "axios";
import { useEffect, useState } from "react";

const AddAdmin = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isErr, setIsErr] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();
    const answer = window.confirm("Are the details correct?");
    if (answer) {
      try {
        const token = localStorage.getItem("Authorization");
        const { data } = await axios.post(
          "https://irms-server.herokuapp.com/api/super/register/admin",
          { name, email },
          {
            headers: {
              Authorization: token,
            },
          }
        );
        setIsErr(2);
        setErrMsg(data.msg);
        setName("");
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
      <h2 className="section-headings">Add Admin</h2>
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
          Register
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

export default AddAdmin;
