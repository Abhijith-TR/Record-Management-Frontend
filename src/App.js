import { useState } from "react";
import Login from "./Login";
import Main from "./Main";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(0);

  // if (!loggedIn) {
  //   return (
  //     <>
  //       <Login setLoggedIn={setLoggedIn} setIsAdmin={setIsAdmin} />
  //     </>
  //   );
  // }

  return <Main isAdmin={isAdmin} />;
};

export default App;
