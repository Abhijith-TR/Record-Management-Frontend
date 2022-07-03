import View from "./ViewTab";
import Admin from "./ConfigTab";
import UpdateTab from "./UpdateTab";
import ChangePassword from "./PasswordTab";
import { useGlobalContext } from "./context";
import Announcements from "./AnnouncementsTab";

const Content = () => {
  const {
    displayView,
    displayAdmin,
    displayUpdate,
    changePassword,
    displayAnnouncements,
  } = useGlobalContext();

  if (displayView) {
    return <View />;
  } else if (displayAdmin) {
    return <Admin />;
  } else if (displayUpdate) {
    return <UpdateTab />;
  } else if (changePassword) {
    return <ChangePassword />;
  } else if (displayAnnouncements) {
    return <Announcements />;
  }
};

export default Content;
