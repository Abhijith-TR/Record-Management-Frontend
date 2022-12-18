import AddAdmin from "./AddAdmin";
import AddUser from "./AddUser";
import RemoveAdmin from "./RemoveAdmin";
import RemoveUser from "./RemoveUser";
import ClearSubject from "./ClearSubject";
import { useGlobalContext } from "../context";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";

const Admin = () => {
  const { isAdmin } = useGlobalContext();

  if (isAdmin === 0 || isAdmin === 1) {
    return (
      <div className="access-denied">
        <h1 style={{ textAlign: "center" }}>
          Unauthorized to access this page
        </h1>
      </div>
    );
  }

  return (
    <>
      <Navbar></Navbar>
      <div className="update">
        <Routes>
          <Route path="/addadmin" element={<AddAdmin />} />
          <Route path="/adduser" element={<AddUser />} />
          <Route path="/removeadmin" element={<RemoveAdmin />} />
          <Route path="/removeuser" element={<RemoveUser />} />
          <Route path="/clearsubject" element={<ClearSubject />} />
        </Routes>
      </div>
    </>
  );
};

export default Admin;
