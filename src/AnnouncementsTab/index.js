import { useGlobalContext } from "../context";
import Admin from "./admin";
import Student from "./student";

const Announcements = () => {
  const { isAdmin } = useGlobalContext();
  if (isAdmin) return <Admin />;
  else return <Student />;
};

export default Announcements;
