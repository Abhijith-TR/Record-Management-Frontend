import Insert from "./Insert";
import AddSubject from "./AddSubject";
import UpdateRecord from "./UpdateRecord";
import DeleteRecord from "./DeleteRecord";
import { useGlobalContext } from "../context";

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
      <div className="update">
        <Insert />
        <UpdateRecord />
        <AddSubject />
        <DeleteRecord />
      </div>
    </>
  );
};

export default UpdateTab;
