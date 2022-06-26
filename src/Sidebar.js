import { useEffect, useState } from "react";
import { FaServer, FaList, FaListUl } from "react-icons/fa";

const links = [
  "User Records",
  "Subject Records",
  "Delete Record",
  "Update Record",
  "Create Record",
  "Create Subject",
  "Register Admin",
  "Register User",
  "Delete Subject",
  "Remove User",
  "Remove Admin ",
];

const Sidebar = ({ isAdmin }) => {
  const [limit, setLimit] = useState(0);

  useEffect(() => {
    console.log(isAdmin);
    if (isAdmin === 0) setLimit(1);
    else if (isAdmin === 1) setLimit(6);
    else setLimit(11);
  }, [isAdmin]);

  return (
    <div className="sidebar">
      <h1 className="sidebar-heading">User</h1>
      {links.slice(0, limit).map((item, index) => {
        return (
          <h2 className="links" key={index}>
            {item}
          </h2>
        );
      })}
    </div>
  );
};

export default Sidebar;
