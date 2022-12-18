import ViewAnnouncement from "./view";
import InsertAnnouncement from "./insert";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";

const Announcements = () => {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/view" element={<ViewAnnouncement />} />
        <Route path="/insert" element={<InsertAnnouncement />} />
      </Routes>
    </>
  );
};

export default Announcements;
