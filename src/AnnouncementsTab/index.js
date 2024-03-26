import ViewAnnouncement from "./view";
import InsertAnnouncement from "./insert";
import Navbar from "./Navbar";
import { Routes, Route, Navigate } from "react-router-dom";

const Announcements = () => {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/view" element={<ViewAnnouncement />} />
        <Route path="/insert" element={<InsertAnnouncement />} />
        <Route
          path="*"
          element={<Navigate to="/announcements/view" replace />}
        />
      </Routes>
    </>
  );
};

export default Announcements;
