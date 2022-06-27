import Insert from "./Insert";
import AddSubject from "./AddSubject";
import UpdateRecord from "./UpdateRecord";

const UpdateTab = () => {
  return (
    <>
      <div className="update">
        <Insert />
        <AddSubject />
        <UpdateRecord />
        <div>Delete Record</div>
      </div>
    </>
  );
};

export default UpdateTab;
