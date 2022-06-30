import View from "./ViewTab";
import Admin from "./ConfigTab";
import UpdateTab from "./UpdateTab";
import ChangePassword from "./PasswordTab";
import { useGlobalContext } from "./context";

const Content = () => {
  const { displayView, displayAdmin, displayUpdate, changePassword } =
    useGlobalContext();

  if (displayView) {
    return <View />;
  } else if (displayAdmin) {
    return <Admin />;
  } else if (displayUpdate) {
    return <UpdateTab />;
  } else if (changePassword) {
    return <ChangePassword />;
  }
};

export default Content;
