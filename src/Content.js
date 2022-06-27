import View from "./View";
import Admin from "./Admin";
import UpdateTab from "./UpdateTab";
import { useGlobalContext } from "./context";

const Content = () => {
  const { displayView, displayAdmin, displayUpdate } = useGlobalContext();
  if (displayView) {
    return <View />;
  } else if (displayAdmin) {
    return <Admin />;
  } else if (displayUpdate) {
    return <UpdateTab />;
  }
};

export default Content;
