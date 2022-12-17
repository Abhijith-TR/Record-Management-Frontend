import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const Navbar = () => {
  const { isAdmin } = useGlobalContext();

  return (
    <div className="tab-navbar">
      <div className="navbar-single-link">
        <Link to="/announcements" className="sub-link">
          {isAdmin ? "View / Remove" : "View"}
        </Link>
      </div>
      <div className="navbar-single-link">
        <Link to="/announcements/insert" className="sub-link">
          Insert
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
