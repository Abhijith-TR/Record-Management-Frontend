import AddAdmin from "./AddAdmin";
import AddUser from "./AddUser";
import RemoveAdmin from "./RemoveAdmin";
import RemoveUser from "./RemoveUser";
import ClearSubject from "./ClearSubject";
import { useGlobalContext } from "../context";

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
      <div className="update">
        <AddAdmin />
        <AddUser />
        <RemoveAdmin />
        <RemoveUser />
        <ClearSubject />
      </div>
    </>
  );
};

export default Admin;
