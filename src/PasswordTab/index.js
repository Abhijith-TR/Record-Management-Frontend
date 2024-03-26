import axios from "axios";
import { useState, useEffect } from "react";
import { useGlobalContext } from "../context";
import { ImSpinner6 } from "react-icons/im";

const ChangePassword = () => {
  const [loading, setLoading] = useState(false);
  const { isAdmin } = useGlobalContext();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isErr, setIsErr] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setIsErr(1);
      setErrMsg("Passwords do not match");
      return;
    }
    if (newPassword === oldPassword) {
      setIsErr(1);
      setErrMsg("Please enter a new password");
      return;
    }
    if (newPassword.length < 8) {
      setIsErr(1);
      setErrMsg("Password must be atleast 8 characters");
      return;
    }
    setLoading(true);
    const route = isAdmin ? "admin" : "user";
    try {
      const token = document.cookie.slice(14);
      const { data } = await axios.patch(
        `https://irms.onrender.com/api/${route}/change`,
        { newPassword, password: oldPassword },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setLoading(false);
      setIsErr(2);
      setErrMsg(data.msg);
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
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
    <div style={{ marginTop: "1.5rem" }}>
      <h2 className="section-headings">Change Password</h2>
      <form className="record-search" onSubmit={handleUpdate}>
        <input
          type="password"
          className="login-input login-input-alt"
          placeholder="Confirm old password"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
        />
        <input
          type="password"
          className="login-input login-input-alt"
          placeholder="Enter new password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          style={{ marginTop: "0.5rem" }}
        />
        <input
          type="password"
          className="login-input login-input-alt"
          placeholder="Confirm new password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          style={{ marginTop: "0.5rem" }}
        />

        <button
          type="submit"
          className="submit-btn submit-btn-alt"
          style={{ marginTop: "0.5rem" }}
        >
          Change Password
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

export default ChangePassword;
