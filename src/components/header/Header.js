import { useEffect } from "react";
import { useState } from "react";
import classes from "./Header.module.css";
import HeaderFirstSect from "./HeaderFirstSect";
import Navigator from "./Navigator";
import NavigatorSmall from "./NavigatorSmall";
const Header = () => {
  const windowSizeHandler = () => {
    setWindowSize(window.innerWidth);
  };
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [isWindowSmall, setIsWindowSmall] = useState(false);
  useEffect(() => {
    if (windowSize < 950) {
      setIsWindowSmall(true);
    } else {
      setIsWindowSmall(false);
    }
  }, [windowSize]);
  window.addEventListener("resize", windowSizeHandler);

  return (
    <div className={classes.header_container}>
      <HeaderFirstSect />
      <div className={classes.navigator_main_container}>
        {!isWindowSmall && <Navigator />}
        {isWindowSmall && <NavigatorSmall />}
      </div>
    </div>
  );
};
export default Header;
