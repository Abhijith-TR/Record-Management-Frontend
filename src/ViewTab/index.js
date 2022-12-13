import { useEffect, useState } from "react";
import RecordCard from "./RecordCard";
import axios from "axios";
import { useGlobalContext } from "../context";
import { ImSpinner6 } from "react-icons/im";

const View = () => {
  const [loading, setLoading] = useState(false);
  const { isAdmin } = useGlobalContext();
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
    const token = document.cookie.slice(14);
    e.preventDefault();
    if (!searchValue) {
      setError(true);
      setErrMsg("Invalid Input");
    } else if (!subjectCode) {
      setLoading(true);
      const url = isAdmin
        ? `https://localhost:3000/api/admin/records/get/${searchValue}`
        : `https://localhost:3000/api/user/records/${searchValue}`;
      try {
        const { data } = await axios.get(url, {
          headers: {
            Authorization: token,
          },
        });
        setLoading(false);
        if (data.records.length === 0) {
          setError(true);
          setErrMsg("No records for the given student");
        }
        setRecords(() => data.records);
      } catch (error) {
        setLoading(false);
        setError(true);
        setErrMsg(error.response.data.msg);
      }
    } else {
      setLoading(true);
      try {
        const { data } = await axios.get(
          `https://localhost:3000/api/admin/records/${searchValue}`,
          {
            headers: {
              Authorization: token,
            },
          }
        );
        setLoading(false);
        if (data.records.length === 0) {
          setError(true);
          setErrMsg("No records for the given subject");
        }
        setRecords(() => data.records);
      } catch (error) {
        setLoading(false);
        setError(true);
        setErrMsg(error.response.data.msg);
      }
    }
    setSearchValue("");
  };

  return (
    <>
      <div style={{ marginBottom: "2rem" }}>
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
        <div className="error" style={{ color: "black" }}>
          {loading ? <ImSpinner6 className="spinner" size={30} /> : <></>}
        </div>
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
