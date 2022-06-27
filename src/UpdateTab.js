import Insert from "./Insert";
import AddSubject from "./AddSubject";

const UpdateTab = () => {
  return (
    <>
      <div className="update">
        <Insert />
        <AddSubject />
        <div>Update Record</div>
        <div>Delete Record</div>
      </div>
    </>
  );
};

export default UpdateTab;
