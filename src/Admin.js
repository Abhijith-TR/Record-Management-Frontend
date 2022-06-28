import AddAdmin from "./AddAdmin";
import AddUser from "./AddUser";

const Admin = () => {
  return (
    <>
      <div className="update">
        <AddAdmin />
        <AddUser />
        <div>Remove Admin</div>
        <div>Remove User</div>
        <div>Clear Subject</div>
      </div>
    </>
  );
};

export default Admin;
