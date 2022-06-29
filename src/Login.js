import axios from "axios";
import { useState } from "react";
import { useGlobalContext } from "./context";

const Login = () => {
  const { setLoggedIn, setIsAdmin } = useGlobalContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setErrMsg("Enter valid username and password");
      setError(true);
      setEmail("");
      setPassword("");
      return;
    }
    try {
      const { data } = await axios.post(
        "https://irms-server.herokuapp.com/api/authorize/admin",
        {
          email,
          password,
        }
      );
      localStorage.setItem("Authorization", "Bearer " + data.token);
      setLoggedIn(true);
      setError(false);
      setIsAdmin(data.isAdmin);
    } catch (error) {
      try {
        const { data } = await axios.post(
          "https://irms-server.herokuapp.com/api/authorize/user",
          {
            email,
            password,
          }
        );
        localStorage.setItem("Authorization", "Bearer " + data.token);
        setLoggedIn(true);
        setIsAdmin(data.isAdmin);
        setError(false);
      } catch (error) {
        setErrMsg(error.response.data.msg);
        setError(true);
      }
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>IRMS</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="login-input"
          />
          <input
            type="password"
            placeholder="Password"
            style={{ marginTop: "1rem" }}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="login-input"
          />{" "}
          <br />
          <button
            type="submit"
            style={{ marginTop: "1rem" }}
            className="submit-btn"
          >
            Login
          </button>
        </form>
        <div style={{ marginBottom: "1.5rem", background: "white" }}>
          {error ? <h5 className="error">{errMsg}</h5> : <></>}
        </div>
      </div>
    </div>
  );
};

export default Login;
