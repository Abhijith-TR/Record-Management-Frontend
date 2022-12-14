import View from "./ViewTab";
import Admin from "./ConfigTab";
import UpdateTab from "./UpdateTab";
import ChangePassword from "./PasswordTab";
import { useGlobalContext } from "./context";
import Announcements from "./AnnouncementsTab";

const Content = () => {
  const { tabs } = useGlobalContext();

  if (tabs[0]) {
    return <View />;
  } else if (tabs[2]) {
    return <Admin />;
  } else if (tabs[1]) {
    return <UpdateTab />;
  } else if (tabs[3]) {
    return <ChangePassword />;
  } else if (tabs[4]) {
    return <Announcements />;
  }
};

export default Content;
