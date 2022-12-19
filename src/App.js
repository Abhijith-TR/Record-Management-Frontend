import Login from "./Login";
import "bootstrap/dist/css/bootstrap.min.css";
import { useGlobalContext } from "./context";
import Navbar from "./Navbar";
import Error from "./Error";
import View from "./ViewTab";
import Admin from "./ConfigTab";
import UpdateTab from "./UpdateTab";
import ChangePassword from "./PasswordTab";
import Announcements from "./AnnouncementsTab";
import { Routes, Route } from "react-router-dom";

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
          <Route path="/admin/*" element={<Admin />} />
          <Route path="/update/*" element={<UpdateTab />} />
          <Route path="/announcements/*" element={<Announcements />}></Route>
          <Route path="/change" element={<ChangePassword />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
