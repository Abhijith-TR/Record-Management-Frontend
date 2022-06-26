import Content from "./Content";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Main = ({ isAdmin }) => {
  return (
    <>
      <Navbar className="Navbar" />
      <div className="page">
        <Content />
      </div>
    </>
  );
};

export default Main;
