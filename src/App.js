import Login from "./Login";
import Main from "./Main";
import "bootstrap/dist/css/bootstrap.min.css";
import { useGlobalContext } from "./context";

const App = () => {
  const { loggedIn, isAdmin } = useGlobalContext();

  // if (!loggedIn) {
  //   return (
  //     <>
  //       <Login />
  //     </>
  //   );
  // }

  return <Main isAdmin={isAdmin} />;
};

export default App;
