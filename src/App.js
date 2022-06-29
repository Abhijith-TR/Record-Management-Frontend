import Login from "./Login";
import "bootstrap/dist/css/bootstrap.min.css";
import { useGlobalContext } from "./context";
import Navbar from "./Navbar";
import Content from "./Content";

const App = () => {
  const { loggedIn } = useGlobalContext();

  if (!loggedIn) {
    return <Login />;
  }

  return (
    <>
      <Navbar className="Navbar" />
      <div className="page">
        <Content />
      </div>
    </>
  );
};

export default App;
