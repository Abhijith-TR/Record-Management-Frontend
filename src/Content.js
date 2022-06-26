import View from "./View";
import Admin from "./Admin";
import Update from "./Update";
import { useGlobalContext } from "./context";

const Content = () => {
  const { displayView, displayAdmin, displayUpdate } = useGlobalContext();
  if (displayView) {
    return <View />;
  } else if (displayAdmin) {
    return <Admin />;
  } else if (displayUpdate) {
    return <Update />;
  }
};

export default Content;
