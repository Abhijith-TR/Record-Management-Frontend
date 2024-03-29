import { useEffect, useState } from "react";

const RecordCard = (props) => {
  const [color, setColor] = useState("");
  const { subjectName, subjectCode, grade, entryNumber, display, semester } =
    props;
  useEffect(() => {
    if (typeof grade === "undefined") setColor("");
    else if (grade[0] === "A") setColor("green");
    else if (grade[0] === "B") setColor("#EAA001");
    else if (grade[0] === "C") setColor("#C06800");
    else if (grade[0] === "-") setColor("gray");
    else setColor("#D63C31");
  }, [grade]);

  if (Object.keys(props).length === 0) return <></>;

  return (
    <div style={{ textAlign: "center" }}>
      <div className="record-card-holder">
        <article className="record-card" style={{ gridColumn: "2" }}>
          <div className="course-name">
            {display ? entryNumber : subjectCode}
          </div>
          <div className="course-name">{subjectName}</div>
          <div className="course-name course-grade" style={{ color: color }}>
            {grade}
          </div>
          <div className="course-name semester-name">{semester}</div>
        </article>
      </div>
    </div>
  );
};

export default RecordCard;
