import Insert from "./Insert";
import AddSubject from "./AddSubject";
import UpdateRecord from "./UpdateRecord";
import DeleteRecord from "./DeleteRecord";

const UpdateTab = () => {
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
