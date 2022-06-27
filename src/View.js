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
    console.log(subjectCode);
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
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbklkIjoiNjJiNDdkNTM4YzhkMWJlZDdjZjc3MTY0IiwibmFtZSI6IkpvaG4gRG9lIiwiaXNBZG1pbiI6dHJ1ZSwiaXNTdXBlciI6dHJ1ZSwiaWF0IjoxNjU2MzA1NDYyLCJleHAiOjE2NTYzNDE0NjJ9.wqfM_z25uxanGzYwwE-eSyxO5gjtFSN3JY-lD_sTivs",
            },
          }
        );
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
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbklkIjoiNjJiNDdkNTM4YzhkMWJlZDdjZjc3MTY0IiwibmFtZSI6IkpvaG4gRG9lIiwiaXNBZG1pbiI6dHJ1ZSwiaXNTdXBlciI6dHJ1ZSwiaWF0IjoxNjU2MzA1NDYyLCJleHAiOjE2NTYzNDE0NjJ9.wqfM_z25uxanGzYwwE-eSyxO5gjtFSN3JY-lD_sTivs",
            },
          }
        );
        setRecords(() => data.records);
      } catch (error) {
        setError(true);
        setErrMsg(error.response.data.msg);
      }
    }
    setSearchValue("");
  };

  useEffect(() => {
    console.log(records);
  }, [records]);

  return (
    <>
      <div>
        <h2 className="page-headings">Display Records</h2>
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
      <RecordCard
        subjectName="Computer Architecture"
        subjectCode="CS204"
        grade="-"
      />
    </>
  );
};

export default View;
