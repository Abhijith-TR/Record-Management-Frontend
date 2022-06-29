import AddAdmin from "./AddAdmin";
import AddUser from "./AddUser";
import RemoveAdmin from "./RemoveAdmin";
import RemoveUser from "./RemoveUser";
import ClearSubject from "./ClearSubject";

const Admin = () => {
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
