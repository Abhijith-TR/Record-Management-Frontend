import { useEffect, useState } from "react";
import RecordCard from "./RecordCard";
import axios from "axios";

const View = () => {
  const [records, setRecords] = useState([]);
  const [subjectCode, setSubjectCode] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [error, setError] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    if (error) {
      const timeout = setTimeout(() => {
        setError(false);
      }, 3000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [error]);

  const getRecords = async (e) => {
    const token = localStorage.getItem("Authorization");
    e.preventDefault();
    if (!searchValue) {
      setError(true);
      setErrMsg("Invalid Input");
    } else if (!subjectCode) {
      try {
        const { data } = await axios.get(
          `https://irms-server.herokuapp.com/api/admin/records/get/${searchValue}`,
          {
            headers: {
              Authorization: token,
            },
          }
        );
        if (data.records.length === 0) {
          setError(true);
          setErrMsg("No records for the given student");
        }
        setRecords(() => data.records);
      } catch (error) {
        setError(true);
        setErrMsg(error.response.data.msg);
      }
    } else {
      try {
        const { data } = await axios.get(
          `https://irms-server.herokuapp.com/api/admin/records/${searchValue}`,
          {
            headers: {
              Authorization: token,
            },
          }
        );
        if (data.records.length === 0) {
          setError(true);
          setErrMsg("No records for the given subject");
        }
        setRecords(() => data.records);
      } catch (error) {
        setError(true);
        setErrMsg(error.response.data.msg);
      }
    }
    setSearchValue("");
  };

  return (
    <>
      <div>
        <h2 className="page-headings" style={{ fontSize: "1.7rem" }}>
          Display Records
        </h2>
        <form className="record-search" onSubmit={getRecords}>
          <input
            type="text"
            className="login-input login-input-alt"
            placeholder="Entry Number / Subject Code"
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
          />
          <label style={{ textAlign: "center", marginTop: "0.4rem" }}>
            Subject Code
            <input
              type="checkbox"
              style={{ marginLeft: "0.5rem", marginTop: "0.2rem" }}
              onChange={() => setSubjectCode(!subjectCode)}
            />
          </label>
          <button
            type="submit"
            className="submit-btn submit-btn-alt"
            style={{ marginTop: "0.5rem" }}
          >
            Search
          </button>
        </form>
        <div className="error">{error ? errMsg : ""}</div>
      </div>
      {records
        .sort((a, b) => a.semester - b.semester)
        .map((item, index) => {
          const {
            subjectCode: subCode,
            subjectName,
            grade,
            semester,
            entryNumber,
          } = item;
          return (
            <RecordCard
              display={subjectCode}
              entryNumber={entryNumber}
              subjectName={subjectName}
              subjectCode={subCode}
              grade={grade}
              key={index}
              semester={semester}
            />
          );
        })}
    </>
  );
};

export default View;
