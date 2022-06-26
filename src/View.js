import { useState } from "react";

const View = () => {
  const [entryNumber, setEntryNumber] = useState("");
  const [subjectCode, setSubjectCode] = useState("");

  const getRecords = async () => {};

  return (
    <>
      <div>
        <h2 className="page-headings">Display Records</h2>
        <form className="record-search">
          <input
            type="text"
            className="login-input login-input-alt"
            placeholder="Enter entry number"
            onChange={(e) => setEntryNumber(e.target.value)}
            value={entryNumber}
          />
          <input
            type="text"
            className="login-input login-input-alt"
            placeholder="Enter subject code"
            onChange={(e) => setSubjectCode(e.target.value)}
            value={subjectCode}
            style={{ marginTop: "0.5rem" }}
          />
          <button
            type="submit"
            className="submit-btn submit-btn-alt"
            style={{ marginTop: "0.5rem" }}
          >
            Search
          </button>
        </form>
      </div>
    </>
  );
};

export default View;
