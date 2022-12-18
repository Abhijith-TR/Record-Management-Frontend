import AddSubject from "./AddSubject";
import UpdateRecord from "./UpdateRecord";
import DeleteRecord from "./DeleteRecord";
import { useGlobalContext } from "../context";
import InsertRecord from "./Insert";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";

const UpdateTab = () => {
  const { isAdmin } = useGlobalContext();

  if (isAdmin === 0) {
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
      <Routes>
        <Route path="/insertrecord" element={<InsertRecord />} />
        <Route path="/updategrade" element={<UpdateRecord />} />
        <Route path="/addsubject" element={<AddSubject />} />
        <Route path="/deleterecord" element={<DeleteRecord />} />
      </Routes>
    </>
  );
};

export default UpdateTab;
