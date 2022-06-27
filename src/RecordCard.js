import { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const RecordCard = ({ subjectName, subjectCode, grade }) => {
  const [color, setColor] = useState("");

  useEffect(() => {
    if (grade[0] === "A") setColor("green");
    else if (grade[0] === "B") setColor("#EAA001");
    else if (grade[0] === "C") setColor("#C06800");
    else if (grade[0] === "-") setColor("gray");
    else setColor("#D63C31");
  }, [grade]);

  return (
    <div
      style={{
        textAlign: "center",
        display: "grid",
        gridTemplateColumns: "1fr 3fr 1fr",
      }}
    >
      <article className="record-card" style={{ gridColumn: "2" }}>
        <div>
          <button style={{ border: "none", background: "hsl(205, 86%, 95%)" }}>
            {<FaAngleDown size={30} />}
          </button>
        </div>
        <div className="course-name">{subjectCode}</div>
        <div className="course-name">{subjectName}</div>
        <div className="course-name course-grade" style={{ color: color }}>
          {grade}
        </div>
      </article>
    </div>
  );
};

export default RecordCard;
