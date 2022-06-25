import { useState } from "react";
import Login from "./Login";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  if (!loggedIn) {
    return (
      <>
        <Login setLoggedIn={setLoggedIn} />
      </>
    );
  }

  return <h1>Logged In</h1>;
};

export default App;
