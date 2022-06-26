import Navbar from "./Navbar";
import Content from "./Content";

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
