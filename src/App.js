import Login from "./Login";
import "bootstrap/dist/css/bootstrap.min.css";
import { useGlobalContext } from "./context";
import AddSubject from "./UpdateTab/AddSubject";
import DeleteRecord from "./UpdateTab/DeleteRecord";
import UpdateRecord from "./UpdateTab/UpdateRecord";
import InsertRecord from "./UpdateTab/Insert";
import Navbar from "./Navbar";
import View from "./ViewTab";
import Admin from "./ConfigTab";
import UpdateTab from "./UpdateTab";
import ChangePassword from "./PasswordTab";
import Announcements from "./AnnouncementsTab";
import { Routes, Route } from "react-router-dom";
import AddAdmin from "./ConfigTab/AddAdmin";
import AddUser from "./ConfigTab/AddUser";
import ClearSubject from "./ConfigTab/ClearSubject";
import RemoveAdmin from "./ConfigTab/RemoveAdmin";
import RemoveUser from "./ConfigTab/RemoveUser";

const App = () => {
  const { loggedIn } = useGlobalContext();

  if (!loggedIn) {
    return <Login />;
  }

  return (
    <>
      <Navbar className="Navbar" />
      <div className="page">
        <Routes>
          <Route path="/" element={<View />} />

          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/addadmin" element={<AddAdmin />} />
          <Route path="/admin/adduser" element={<AddUser />} />
          <Route path="/admin/clearsubject" element={<ClearSubject />} />
          <Route path="/admin/removeadmin" element={<RemoveAdmin />} />
          <Route path="/admin/removeuser" element={<RemoveUser />} />

          <Route path="/update" element={<UpdateTab />} />
          <Route path="/update/addsubject" element={<AddSubject />} />
          <Route path="/update/deleterecord" element={<DeleteRecord />} />
          <Route path="/update/insertrecord" element={<InsertRecord />} />
          <Route path="/update/updaterecord" element={<UpdateRecord />} />

          <Route path="/announcements/*" element={<Announcements />}></Route>
          <Route path="/change" element={<ChangePassword />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
